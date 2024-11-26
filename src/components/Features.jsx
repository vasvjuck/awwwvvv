import { useRef, useState } from "react"
import { TiLocationArrow } from "react-icons/ti"

const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('')
  const ref = useRef()

  const handleMouseMove = (event) => {
    if (!ref.current) return;

    const { left, top, width, height } =
      ref.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 7;
    const tiltY = (relativeX - 0.5) * -7;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => setTransformStyle('');

  return (
    <div
      className={className}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  )
}

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h2 className="bento-title special-font">{title}</h2>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">Into the VVV</p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Into the VVV Into the VVVInto the VVVInto the VVVInto the VVVInto the VVVInto the VVVInto the VVVInto the VVVInto the VVVInto the VVVInto the VVVInto the VVV
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>radi<b>n</b>t</>}
            description='A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.'
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-6">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>zig<b>m</b>a</>}
              description='A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.'
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>nex<b>u</b>s</>}
              description='A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.'
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>az<b>u</b>l</>}
              description='A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.'
            />
          </BentoTilt>
          <div className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h2 className="bento-title special-font max-w-64 text-black">Mo<b>r</b>e co<b>m</b>ing soon</h2>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </div>
          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default Features