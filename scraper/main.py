from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from fake_useragent import UserAgent

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

@app.get('/')
async def hello():
    return JSONResponse(status_code=200, content={'msg':"hello"})

@app.get('/scrape')
async def scrape(url: str):
    if not url:
        return JSONResponse(status_code=400, content={'error': 'URL parameter is required.'})

    try:
        print("Hello")
        options = Options()
        options.add_argument('--headless')
        options.add_argument('--remote-debugging-port=9222')
        options.add_argument('--no-sandbox')
        ua = UserAgent()
        userAgent = ua.random
        options.add_argument(f'user-agent={userAgent}')

        driver = webdriver.Chrome(options=options)
        driver.get(url)

        # Retrieve title
        title = driver.title

        # Retrieve author
        author = None
        try:
            author = driver.find_element(By.CSS_SELECTOR, 'meta[name="author"]').get_attribute('content')
        except Exception as error:
            print('No author meta tag found.')

        # Re	trieve headers and paragraphs
        elements = driver.find_elements(By.CSS_SELECTOR, 'h1, h2, h3, h4, h5, h6, p')
        elements = [{'type': el.tag_name, 'text': el.text} for el in elements]

        driver.quit()

        return JSONResponse(status_code=200, content={'title': title, 'author': author, 'elements': elements})
    except Exception as error:
        print(error)
        return JSONResponse(status_code=500, content={'error': 'Error fetching the URL content.'})
