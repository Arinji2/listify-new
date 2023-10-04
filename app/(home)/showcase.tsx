import WidthWrapper from "../(wrapper)/widthWrapper";

export default function Showcase() {
  return (
    <section className="w-full h-fit bg-palette-primary py-10  flex flex-col items-center justify-center pb-5">
      <WidthWrapper>
        <div className="w-full h-full flex flex-col items-center xl:items-start justify-center gap-10">
          <div className="w-fit h-fit flex md:flex-row items-center justify-start flex-col gap-5 ">
            <div className="w-[100px] h-[100px] bg-palette-background rounded-full flex flex-col items-center justify-center">
              <p className="text-[60px] font-bold shrink text-palette-primary">
                1
              </p>
            </div>
            <h2 className="text-palette-background font-bold text-[50px]">
              Showcase
            </h2>
          </div>
          <div className="xl:w-fit w-full h-full grid xl:grid-cols-2 grid-cols-1 xl:pl-16 gap-5">
            <Card
              title="Themes"
              description="Showcase your playlists in multiple themes."
            />
            <Card
              title="Link"
              description="Make a custom link to access your spotify playlist."
            />
            <Card
              title="Lyrics"
              description="View lyrics in any language for your songs."
            />
            <Card
              title="Stats"
              description="Showcase stats like Likes and Views for your playlist."
            />
          </div>
        </div>
      </WidthWrapper>
    </section>
  );
}

function Card({ title, description }: { title: string; description: string }) {
  return (
    <div
      tabIndex={0}
      className="md:w-[516px] m-auto  hover:scale-90 transition-all ease-in-out duration-300 hover:shadow-buttonHover will-change-transform w-full h-[200px] border-[3px] border-black bg-palette-background  flex flex-col items-start p-5 justify-start shadow-button"
    >
      <h3 className="text-[50px] font-bold text-palette-text">{title}</h3>
      <p className=" text-[20px] text-palette-text font-medium">
        {description}
      </p>
    </div>
  );
}
