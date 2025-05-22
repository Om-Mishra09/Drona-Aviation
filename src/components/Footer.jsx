// import "../styles/Footer.css"

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-logo">
//             <span className="logo-text">PlutoBlocks</span>
//             <p className="tagline">Programming drones made simple</p>
//           </div>

//           <div className="footer-links">

//             <div className="link-group">
//               <h4>Company</h4>
//               <ul>
//                 <li>
//                   <a href="https://www.dronaaviation.com/about-us/">About Us</a>
//                 </li>

//                 <li>
//                   <a href="https://www.dronaaviation.com/career/">Careers</a>
//                 </li>
//                 <li>
//                   <a href="https://www.dronaaviation.com/blog/">Blog</a>
//                 </li>
//               </ul>
//             </div>

//           </div>
//         </div>

//         <div className="copyright">
//           <p>&copy; {new Date().getFullYear()} PlutoBlocks. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
// Footer.js
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-text">PlutoBlocks</span>
          <p className="tagline">Programming drones made simple</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="https://www.dronaaviation.com/about-us/">About Us</a>
              </li>
              <li>
                <a href="https://www.dronaaviation.com/career/">Careers</a>
              </li>
              <li>
                <a href="https://www.dronaaviation.com/blog/">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} PlutoBlocks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

