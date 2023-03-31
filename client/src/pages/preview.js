import SidePanel from "@/Components/SidePanel/sidepanel.component";
import { useRouter } from "next/router";

const Preview = () => {

  const router = useRouter();

  const {title} = router.query;

  return (
    <div className="flex justify-between bg-[#000000ee]">
      <div className="w-[55vw] m-10 ml-60 rounded-lg shadow-md shadow-[#dcdcdc] pt-20 bg-white">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div className="font-sans">
            <p className="text-base md:text-sm text-green-500 font-bold">
              &lt;{" "}
              <a
                onClick={() => router.back()}
                className="text-base md:text-sm text-green-500 cursor-pointer font-bold no-underline hover:underline"
              >
                Go back
              </a>
            </p>
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              {title}
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-600">
              Published 19 February 2019
            </p>
          </div>
          <p className="py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in neque sit amet dolor vulputate tempor. Vestibulum felis massa, lacinia ac mattis eget, vulputate eget risus. Mauris vitae quam est. Etiam vitae accumsan lorem. Integer ultrices nibh felis, ac tempus ante rutrum a. Pellentesque maximus urna quam, id blandit justo tempus ac.
          </p>

          <p className="py-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in neque sit amet dolor vulputate tempor. Vestibulum felis massa, lacinia ac mattis eget, vulputate eget risus. Mauris vitae quam est. Etiam vitae accumsan lorem. Integer ultrices nibh felis, ac tempus ante rutrum a. Pellentesque maximus urna quam, id blandit justo tempus ac.
          </p>

          <h1 className="py-2 font-sans">Point 1</h1>
          <h2 className="py-2 font-sans">Point 2</h2>
          <h3 className="py-2 font-sans">Point 3</h3>
          <h4 className="py-2 font-sans">Point 4</h4>
          <h5 className="py-2 font-sans">Point 5</h5>
          <h6 className="py-2 font-sans">Point 6</h6>

          <p className="py-6">
            Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus
            purus, in mattis tortor sollicitudin pretium. Phasellus at diam
            posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam,
            pulvinar ut molestie eget, eleifend ac magna. Sed at lorem
            condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend
            turpis vel erat bibendum scelerisque. Maecenas id risus dictum,
            rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor
            molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae
            molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio
            risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla
            eget sem dictum elementum.
          </p>

          <ol>
            <li className="py-3">
              Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
              libero lectus. Fusce vehicula dictum mi. In non dolor at sem
              ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam
              quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit
              amet tellus scelerisque tortor semper posuere.
            </li>
            <li className="py-3">
              Morbi varius posuere blandit. Praesent gravida bibendum neque eget
              commodo. Duis auctor ornare mauris, eu accumsan odio viverra in.
              Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut
              odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus
              hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium
              nec felis.
            </li>
            <li className="py-3">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris,
              tristique in risus ac, tristique rutrum velit. Mauris accumsan
              tempor felis vitae gravida. Cras egestas convallis malesuada.
              Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien
              suscipit, elementum odio et, consequat tellus.
            </li>
          </ol>

          <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
            Example of blockquote - Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit
            amet ligula.
          </blockquote>
        </div>
      </div>
      <SidePanel title = {title}/>
    </div>
  );
};

export default Preview;
