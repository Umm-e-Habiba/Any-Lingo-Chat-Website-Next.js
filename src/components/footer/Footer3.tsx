import EmailInput from "@/components/elements/input/EmailInput";
import siteConfig from "@/config/siteConfig.json";
import Logo from "@/components/elements/logo/Logo";
import Link from "next/link";
import { SocialShare1 } from "../tools/Social";

type Props = {
  footerNav: {
    id: number;
    title: string;
    children?: {
      name: string;
      path: string;
    }[];
  }[];
};

const Footer3 = ({ footerNav }: Props) => {
  const { site_info, footer_info, social } = siteConfig;

  return (
    <div className="inner-container large">
      <footer className="footer_area bg-emerald-50 px-[15px] lg:px-[45px]">
        <div className="inner-container">
          <div className="footer_area_inner grid gap-y-[30px] gap-x-[30px] justify-between overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 py-[40px]">
            {/* Left: logo + contact */}
            <div className="col-span-1">
              <div className="footer_logo mb-4">
                <Logo
                  light={false}
                  url={site_info?.logo_light_2}
                  customWidth={110}
                  customHeight={44}
                  className="max-h-[34px] !w-auto"
                />
              </div>
              <ul className="mt-4 text-emerald-900">
                <li className="mb-3">Help@Frybix.Com</li>
                <li className="mb-3">+1 234 456 678 89</li>
              </ul>
            </div>

            {/* Our / Legal / Features columns (3 columns) */}
            {footerNav.slice(0, 3).map((item) => (
              <div key={item.id} className="col-span-1">
                <h3 className="font-semibold text-emerald-900 mb-4">{item.title}</h3>
                <ul className="space-y-2 text-emerald-900/80">
                  {item.children?.map((child, idx) => (
                    <li key={idx} className="text-sm">
                      <Link href={child.path} className="hover:text-emerald-900">
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="col-span-1">
              <h3 className="font-semibold text-emerald-900 mb-4">Newsletter</h3>
              <p className="text-emerald-900/80 mb-4">Stay Up To Date</p>

              <form className="flex items-center gap-3 bg-white rounded-full p-1 shadow-sm w-full max-w-[360px]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-3 rounded-full border-0 focus:outline-none text-emerald-900"
                />
                <button className="bg-emerald-700 text-white px-5 py-2 rounded-full font-semibold">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="copyright_area">
          <div className="inner-container">
            <div className="copyright_area_inner border-t border-emerald-200 py-[22px] xl:py-[32px] relative ">
              <div className="copyright-text">
                <p className="text-center font-medium text-emerald-900/70">
                  {footer_info.copyright.label} <Link href={footer_info.copyright.link} target="_blank"><span className="text-emerald-900">{footer_info.copyright.company}</span></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer3;
