const Footer = () => {
  return (
    <footer className="bg-base-content text-base-100 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-bold text-base mb-3">CS — Ticket System</h3>
            <p className="text-xs text-base-100/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dummy text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Company</h4>
            <ul className="flex flex-col gap-2 text-xs text-base-100/60">
              <li><a className="hover:text-base-100 cursor-pointer">About Us</a></li>
              <li><a className="hover:text-base-100 cursor-pointer">For Mission</a></li>
              <li><a className="hover:text-base-100 cursor-pointer">Contact Sales</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Services</h4>
            <ul className="flex flex-col gap-2 text-xs text-base-100/60">
              <li><a className="hover:text-base-100 cursor-pointer">Products & Services</a></li>
              <li><a className="hover:text-base-100 cursor-pointer">Customer Stories</a></li>
              <li><a className="hover:text-base-100 cursor-pointer">Download Apps</a></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Information</h4>
            <ul className="flex flex-col gap-2 text-xs text-base-100/60">
              <li><a className="hover:text-base-100 cursor-pointer">Privacy Policy</a></li>
              <li><a className="hover:text-base-100 cursor-pointer">Terms & Conditions</a></li>
              <li><a className="hover:text-base-100 cursor-pointer">Join Us</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Social Links</h4>
            <ul className="flex flex-col gap-2 text-xs text-base-100/60">
              <li><a className="hover:text-base-100 cursor-pointer">⊛ FAQ — Ticket System</a></li>
              <li><a className="hover:text-base-100 cursor-pointer">⊛ FAQ — Ticket System</a></li>
              <li><a className="hover:text-base-100 cursor-pointer">⊛ FAQ — Ticket System</a></li>
              <li><a className="hover:text-base-100 cursor-pointer">✉ support@cs.com</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-base-100/10 mt-8 pt-4 text-center">
          <p className="text-xs text-base-100/40">
            © 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
