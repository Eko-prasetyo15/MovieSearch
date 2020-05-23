import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="social-area">
                        <ul>
                            <li><a href="https://www.facebook.com/profile.php?id=1585852810" target="_blank" title="Join us on Facebook" className="shr-btn-facebook"><span>Facebook</span><i className="fa fa-facebook" /></a></li>
                            <li><a href="https://www.instagram.com/abushanum/" target="_blank" title="Join us on Instagram" className="shr-btn-instagram"><span>Instagram</span><i className="fa fa-instagram" /></a></li>
                            <li><a href="https://www.linkedin.com/in/eko-prasetyo-753565bb/" target="_blank" title="Join us on Behance" className="shr-btn-linkedin"><span>Behance</span><i className="fa fa-linkedin" /></a></li>
                            <li><a href="https://github.com/Eko-prasetyo15/" target="_blank" title="Join us on Soundcloud" className="shr-btn-soundcloud"><span>Soundcloud</span><i className="fa fa-github" /></a></li>
                        </ul>
                    </div>
                    <div className="credits">
                        <p>©2020 <span className="footer-white">Abushanum</span></p><img className="slice-footer" src="https://media3.giphy.com/media/FQkGpU34nbXrO/source.gif" alt="Pizz and love" />
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer