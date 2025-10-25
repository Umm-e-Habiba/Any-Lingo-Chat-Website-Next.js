import Logo from "@/components/elements/logo/Logo";
import siteConfig from "@/config/siteConfig.json";
import Link from "next/link";

type Props = {
  footerNav: {
    id: number;
    title: string;
    children?: {
      name: string;
      path: string;
      isLocation?: boolean;
    }[];
  }[];
};

const Footer1 = ({ footerNav }: Props) => {
  const { site_info, footer_info, social } = siteConfig;

  return (
    <div className="inner-container large">
      <footer className="footer_area bg-[#ebffec] px-[15px] lg:px-[45px]">
        <div className="inner-container">
          <div className="footer_area_inner grid gap-y-[30px] gap-x-[30px] justify-between overflow-hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 py-[40px]">
            {/* Left: logo + contact + brand text */}
            <div className="col-span-1">
              <div className="footer_logo mb-4 flex items-center gap-3">
                <Logo
                  light={false}
                  url={site_info?.logo_light_2}
                  customWidth={40}
                  customHeight={40}
                  className="!h-[34px] !w-auto"
                />
                <span className="font-semibold text-black text-xl">AnyLingo</span>
              </div>
              <ul className="mt-4 text-black/80">
                <li className="mb-3">{footer_info?.email || "Help@Frybix.Com"}</li>
                <li className="mb-3">{footer_info?.mobile || "+1 234 456 678 89"}</li>
              </ul>
            </div>

            {/* Our / Legal / Features columns (3 columns) */}
            {/* Column: Our */}
            <div className="col-span-1">
              <h3 className="font-bold text-black text-lg xl:text-xl mb-4">Our</h3>
              <ul className="space-y-2 text-black/70">
                <li className="text-sm">Home</li>
                <li className="text-sm">Instant Message</li>
                <li className="text-sm">Translation</li>
                <li className="text-sm">Conversations</li>
                <li className="text-sm">User-Friendly Interface</li>
              </ul>
            </div>

            {/* Column: Legal */}
            <div className="col-span-1">
              <h3 className="font-bold text-black text-lg xl:text-xl mb-4">Legal</h3>
              <ul className="space-y-2 text-black/70">
                <li className="text-sm">Terms Of Use</li>
                <li className="text-sm">Privacy Police</li>
                <li className="text-sm">Cookie Policy</li>
              </ul>
            </div>

            {/* Column: Features */}
            <div className="col-span-1">
              <h3 className="font-bold text-black text-lg xl:text-xl mb-4">Features</h3>
              <ul className="space-y-2 text-black/70">
                <li className="text-sm">Voice Cloning</li>
                <li className="text-sm">Secure Messaging</li>
                <li className="text-sm">Audio Sharing</li>
                <li className="text-sm">Bi-Directional</li>
                <li className="text-sm">Communication</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-span-1">
              <h3 className="font-bold text-black text-lg xl:text-xl mb-4">Newsletter</h3>
              <p className="text-black/70 mb-4">Stay Up To Date</p>

              <form className="flex items-center gap-3 bg-white rounded-full p-1 shadow-sm w-full max-w-[420px]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-5 py-3 rounded-full border-0 focus:outline-none text-black"
                />
                <button className="bg-[#29a63a] text-white px-7 py-3 rounded-full font-semibold transform hover:scale-105 transition-transform shadow-md">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        <div className="copyright_area">
          <div className="inner-container">
            <div className="copyright_area_inner border-t border-emerald-200 py-[22px] xl:py-[32px] relative ">
              <div className="copyright-text">
                <p className="text-center font-medium text-emerald-900/70">
                  {footer_info?.copyright?.label || "@2025"} <Link href={footer_info?.copyright?.link || "#"} target="_blank"><span className="text-emerald-900">{footer_info?.copyright?.company || "Any Lingo-Chat"}</span></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer1;
