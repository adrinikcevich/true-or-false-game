import { Icon } from "@iconify/react";
export const Footer = () =>{
    return (
        <div className="footer">
            <ul className="footer__network--list">
                <li className="footer__network--link">
                    <a href="https://github.com/adrinikcevich" target='_blank' rel='noopener noreferrer'>
                        <Icon icon="akar-icons:github-fill" /> GitHub
                    </a>
                </li>
                <li className="footer__network--link">
                    <a href="https://www.instagram.com/adrinikcevich/" target='_blank' rel='noopener noreferrer'>
                        <Icon icon="akar-icons:instagram-fill" /> Instagram
                    </a>
                </li>
                <li className="footer__network--link">
                    <a href="https://twitter.com/Adri_N16" target='_blank' rel='noopener noreferrer'>
                        <Icon icon="akar-icons:twitter-fill" /> Twitter
                    </a>
                </li>
            </ul>
            <div className="footer__info--container">
                <p>Designed by <b>Adriano Nikcevich</b></p>
                <p>Powered by <b>React</b></p>
                <p>All questions are taken from <a href="https://opentdb.com/" target='_blank' rel='noopener noreferrer'>Open Trivia DB</a></p>
            </div>
            
            <div className="copyright__container">
                <p>&copy; Copyright 2022</p>
            </div>
            
        </div>
    )
}

