import { Link } from 'gatsby'
import React from 'react'
import logo from '../assets/images/logo.svg'

const Footer = props => (
  <footer id="footer">
    <div className="div-left">
      <img src={logo}></img>
      <h2>ㅇㅇ 태권도장</h2>
    </div>

    <div className="div-right">
      <dl className="alt">
        <dt>Address</dt>
        <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(000) 000-0000 x 0000</dd>
        <dt>Email</dt>
        <dd>
          <a href="https://codebushi.com">information@untitled.tld</a>
        </dd>
      </dl>
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/huntaroSan"
            className="icon fa-twitter alt"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-facebook alt">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-instagram alt">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/codebushi/gatsby-starter-stellar"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://codebushi.com" className="icon fa-dribbble alt">
            <span className="label">Dribbble</span>
          </a>
        </li>
      </ul>
    </div>
    <p className="copyright">Copyright &copy; 태권도장. All rights reserved.</p>
  </footer>
)

export default Footer
