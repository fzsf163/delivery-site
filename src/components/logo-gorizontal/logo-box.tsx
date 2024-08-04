import l1 from "../../assets/logo/Logo.png";
import l2 from "../../assets/logo/Logo-1.png";
import l3 from "../../assets/logo/Logo-2.png";
import l4 from "../../assets/logo/Logo-3.png";
import l5 from "../../assets/logo/Logo-4.png";

type Props = {};

const logosBox = [
  {
    label: "logo1",
    src: l1,
  },
  {
    label: "logo2",
    src: l2,
  },
  {
    label: "logo3",
    src: l3,
  },
  {
    label: "logo4",
    src: l4,
  },
  {
    label: "logo5",
    src: l5,
  },
];

export default function LogoBox({}: Props) {
  return (
    <div className="mb-[113px] mt-[90px] w-full min-w-md overflow-x-scroll max-w-[1920]" id="logoBox">
      <div className="mx-auto flex w-[1320px] items-center justify-center gap-[106px]">
        {logosBox.map((logo, index) => {
          return (
            <div key={index + logo.label}>
              <img src={logo.src} alt="" className="h-[47.73px] w-[180px]" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
