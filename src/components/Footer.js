import React from "react";
import {BsTelegram} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"

export default function Footer() {
  return (
    <footer>
        <div id="contact">
            <div id="about">
                <h2>Контакты</h2>
                <p>Number phone: (+996704834218)</p>
                <p>Adress: street Pupkina88</p>
                <p>email: aziz.tls.kg.00@gmail.com</p>
            </div>
            <div id="about">
                <h2>Ссылки</h2>
                <ul>
                <li className="change">
                    <a href="https://webpack.js.org/">Webpack</a>
                </li>
                <li className="change">
                    <a href="https://ru.reactjs.org/">React</a>
                </li>
                <li className="change">
                    <a href="https://habr.com/ru/companies/timeweb/articles/588498/">Habr.com</a>
                </li>
                </ul>
            </div>
            <div id="about">
                <h2>Соц. сети</h2>
                <ul>
                <li className="change">
                    <a href="https://web.whatsapp.com/">Whatsapp</a> <BsWhatsapp className="icons"/>
                </li>
                <li className="change">
                    <a href="https://t.me/damirbekov_aziz">Telegram </a><BsTelegram className="icons"/>
                </li>
                <li className="change">
                    <a href="https://instagram.com/aziz_damirbekov?igshid=ZGUzMzM3NWJiOQ==">Instagram </a><BsInstagram className="icons"/>
                </li>
                </ul>
            </div>
        </div>
    </footer>
  );
}
