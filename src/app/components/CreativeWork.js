
import Link from "next/link"

export default function CreativeWork() {
  return (
    <div className="see-our-result">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="heading">
                    <div className="title text-white">Check our Creative Work</div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="see-result-btn">
                    <Link href="seo-portfolio.php">
                        SEO Portfolio<span> *</span>
                    </Link>
                    <Link href="web-development-portfolio.php">
                        Web Portfolio<span> *</span>
                    </Link>
                    <Link href="mobile-app-portfolio.php">
                        App Portfolio<span> *</span>
                    </Link>
                    <Link href="testimonials.php">
                        Testimonials<span> *</span>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
