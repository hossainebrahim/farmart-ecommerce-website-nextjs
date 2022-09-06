import FooterCard from "../components/FooterCard";
import { FiPhone } from "react-icons/fi";
import { VscHome } from "react-icons/vsc";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import Button from "../components/share/Button";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container">
        {/* footer infos*/}
        <div className="flex flex-wrap space-y-4 pb-10 pt-8 border-b justify-between items-center">
          <FooterCard
            image="/icons/f (1).svg"
            title="Free Shipping"
            subtitle="For all orders over $200"
          />
          <FooterCard
            image="/icons/f (2).svg"
            title="1 & 1 Returns"
            subtitle="Cancellation after 1 day"
          />
          <FooterCard
            image="/icons/f (3).svg"
            title="100% Secure Payment"
            subtitle="Gurantee secure payments"
          />
          <FooterCard
            image="/icons/f (4).svg"
            title="24/7 Dedicated Support"
            subtitle="Anywhere & anytime"
          />
          <FooterCard
            image="/icons/f (5).svg"
            title="Daily Offers"
            subtitle="Discount up to 70% OFF"
          />
        </div>

        {/* footer widgets*/}
        <div className="my-10 flex flex-wrap gap-10 justify-between">
          {/* contacts*/}
          <div className="max-w-md">
            <h2 className="text-xl mb-5 font-bold">
              Farmart – Your Online Foods & Grocery
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              finibus viverra iaculis. Etiam vulputate et justo eget
              scelerisque.
            </p>
            <div className="mt-5 space-y-2">
              <span className="flex">
                <FiPhone className="text-color mt-[5px]" />
                <div className="ml-4">
                  <p className="">Hotline 24/7:</p>
                  <h3 className="text-2xl font-bold">(+965) 7492-4277</h3>
                </div>
              </span>
              <span className="flex mt-7">
                <VscHome className="text-color mt-[5px]" />
                <address className="ml-4 text-color not-italic">
                  sirajganj ,rajshahi,bangladesh
                </address>
              </span>
              <span className="flex">
                <AiOutlineMail className="text-color mt-[5px]" />
                <p className="ml-4"> hossainebrahim03@gmail.com</p>
              </span>
            </div>
          </div>
          {/* Links*/}
          <div className="">
            <h2 className="text-lg mb-6 font-bold">Useful Links</h2>
            <ul className="space-y-5">
              <FooterLink href="/" text="About Us" />
              <FooterLink href="/" text="Contact" />
              <FooterLink href="/" text="Help Center" />
              <FooterLink href="/" text="Career" />
              <FooterLink href="/" text="Sitemap" />
            </ul>
          </div>
          {/* Links*/}
          <div className="">
            <h2 className="text-lg mb-6 font-bold">Help Center</h2>
            <ul className="space-y-5">
              <FooterLink href="/" text="Payments" />
              <FooterLink href="/" text="Payments" />
              <FooterLink href="/" text="Product Returns" />
              <FooterLink href="/" text="FAQ" />
              <FooterLink href="/" text="Checkout" />
            </ul>
          </div>
          {/* Newsletter */}
          <div className="lg:max-w-sm">
            <h2 className="text-lg mb-6 font-bold">Farmart Newsletter</h2>
            <p>
              Register now to get updates on promotions and coupns. Don't worry!
              We not spam
            </p>
            <div className="flex items-center mt-5">
              <div className="flex flex-1 items-center border p-4 rounded">
                <AiOutlineMail className="text-title mt-[5px]" />
                <input
                  type="text"
                  placeholder="Your email..."
                  className="outline-none bg-transparent px-4 flex-1"
                />
              </div>
              <Button title="Subscribe" className="self-stretch" />
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="py-8 flex flex-wrap space-y-3 justify-center md:justify-between items-center border-t ">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://khaliddev.com"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              Ebrahim hossain
            </a>
            . No Rights Reserved 🙂. Build for fun.
          </p>
          <img src="/images/footer-new-payment.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href = "#", text }) => (
  <li>
    <Link href={href}>
      <a href={href}>{text}</a>
    </Link>
  </li>
);

export default Footer;
