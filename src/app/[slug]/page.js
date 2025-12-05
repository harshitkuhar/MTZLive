import ReputationPage from "../components/reputation/ReputationPage";
import SeoPage from "../components/seo/SeoPage";
import WebPage from "../components/website/WebPage";
import Error from "@/app/404";
import SeoJson from "@/app/json/seo.json";
import WebsiteJson from "@/app/json/website.json";
import ReputationJson from "@/app/json/reputation.json";
import Package from "../components/packages/Packagepage";
import VirtualPage from "../components/virtual assistant/VirtualPage";
import PackagesJson from "../json/packages.json";
import VirtualassistantJson from "../json/virtualassistant.json";
import AdvertisingPage from "../components/advertising/AdvertisingPage";
import AdvertisingJson from "../../app/json/advertising.json";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import MobileApps from "../components/MobileApps/Mobile";
import MobileAppsJson from "../json/mobileapps.json";
import SocialMediaJson from "../json/socialmedia.json";
import PartnerJson from "../json/partner-with-us.json"
import Partners from "../components/partner-with-us/Partners";
import RequestJson from "../json/request-for-quote.json"
import Request from "../components/request-for-quote/Request";

export async function generateMetadata({ params }) {
    const page_data_seo = SeoJson.find((item) => item.slug === '/'+params.slug);
    const page_data_website = WebsiteJson.find((item) => item.slug === '/'+params.slug);
    const page_data_reputation = ReputationJson.find((item) => item.slug === '/' +params.slug);
    const page_data_packages = PackagesJson.find((item) => item.slug === "/" + params.slug);
    const page_data_virtual = VirtualassistantJson.find((item) => item.slug === "/" + params.slug);
    const page_data_advertising = AdvertisingJson.find((item) => item.slug === '/' +params.slug);
    const page_data_mobileapps = MobileAppsJson.find((item) => item.slug === '/' +params.slug);
    const page_data_socialmedia = SocialMediaJson.find((item) => item.slug === '/' +params.slug);
    const page_data_partner = PartnerJson.find((item) => item.slug === '/' +params.slug);
    const page_data_request = RequestJson.find((item) => item.slug === '/' +params.slug);


    if(page_data_seo) {
        return {
            title: page_data_seo.meta_title,
            description: page_data_seo.meta_description,
            keywords: page_data_seo.meta_keywords,
            og_title: page_data_seo.meta_og_title,
            og_description: page_data_seo.meta_og_description,
            og_image: page_data_seo.meta_og_image,
            og_url: page_data_seo.meta_og_url,
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}${page_data_seo.slug}`, // Generate the canonical URL
            }
        }
    } else if(page_data_website) {
        return {
            title: page_data_website.meta_title,
            description: page_data_website.meta_description,
            keywords: page_data_website.meta_keywords,
            og_title: page_data_website.meta_og_title,
            og_description: page_data_website.meta_og_description,
            og_image: page_data_website.meta_og_image,
            og_url: page_data_website.meta_og_url,
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}${page_data_website.slug}`, // Generate the canonical URL
            }
        }
    } else if(page_data_reputation) {
        return {
            title: page_data_reputation.meta_title,
            description: page_data_reputation.meta_description,
            keywords: page_data_reputation.meta_keywords,
            og_title: page_data_reputation.meta_og_title,
            og_description: page_data_reputation.meta_og_description,
            og_image: page_data_reputation.meta_og_image,
            og_url: page_data_reputation.meta_og_url,
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}${page_data_reputation.slug}`, // Generate the canonical URL
            }
        }
    } else if (page_data_packages) {
        return {
          title: page_data_packages.meta_title,
          description: page_data_packages.meta_description,
          keywords: page_data_packages.meta_keywords,
          og_title: page_data_packages.meta_og_title,
          og_description: page_data_packages.meta_og_description,
          og_image: page_data_packages.meta_og_image,
          og_url: page_data_packages.meta_og_url,
          alternates: {
            canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}${page_data_packages.slug}`, // Generate the canonical URL
          }
        };
    } else if (page_data_virtual) {
        return {
          title: page_data_virtual.meta_title,
          description: page_data_virtual.meta_description,
          keywords: page_data_virtual.meta_keywords,
          og_title: page_data_virtual.meta_og_title,
          og_description: page_data_virtual.meta_og_description,
          og_image: page_data_virtual.meta_og_image,
          og_url: page_data_virtual.meta_og_url,
          alternates: {
            canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}${page_data_virtual.slug}`, // Generate the canonical URL
          }
        };
    } else if (page_data_advertising) {
        return {
            title: page_data_advertising.meta_title,
            description: page_data_advertising.meta_description,
            keywords: page_data_advertising.meta_keywords,
            og_title: page_data_advertising.meta_og_title,
            og_description: page_data_advertising.meta_og_description,
            og_image: page_data_advertising.meta_og_image,
            og_url: page_data_advertising.meta_og_url,
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}${page_data_advertising.slug}`, // Generate the canonical URL
            }
        }
    } else if (page_data_mobileapps) {
        return {
            title: page_data_mobileapps.meta_title,
            description: page_data_mobileapps.meta_description,
            keywords: page_data_mobileapps.meta_keywords,
            og_title: page_data_mobileapps.meta_og_title,
            og_description: page_data_mobileapps.meta_og_description,
            og_image: page_data_mobileapps.meta_og_image,
            og_url: page_data_mobileapps.meta_og_url,
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}${page_data_mobileapps.slug}`, // Generate the canonical URL
            }
        }
    }  else if (page_data_socialmedia) {
        return {
            title: page_data_socialmedia.meta_title,
            description: page_data_socialmedia.meta_description,
            keywords: page_data_socialmedia.meta_keywords,
            og_title: page_data_socialmedia.meta_og_title,
            og_description: page_data_socialmedia.meta_og_description,
            og_image: page_data_socialmedia.meta_og_image,
            og_url: page_data_socialmedia.meta_og_url,
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}${page_data_socialmedia.slug}`, // Generate the canonical URL
            }
        }
    }  else if (page_data_partner) {
        return {
            title: page_data_partner.meta_title,
            description: page_data_partner.meta_description,
            keywords: page_data_partner.meta_keywords,
            og_title: page_data_partner.meta_og_title,
            og_description: page_data_partner.meta_og_description,
            og_image: page_data_partner.meta_og_image,
            og_url: page_data_partner.meta_og_url,
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}${page_data_partner.slug}`, // Generate the canonical URL
            }
        }
    }  else if (page_data_request) {
        return {
            title: page_data_request.meta_title,
            description: page_data_request.meta_description,
            keywords: page_data_request.meta_keywords,
            og_title: page_data_request.meta_og_title,
            og_description: page_data_request.meta_og_description,
            og_image: page_data_request.meta_og_image,
            og_url: page_data_request.meta_og_url,
            alternates: {
                canonical: `${process.env.NEXT_PUBLIC_MAIN_URL}${page_data_request.slug}`, // Generate the canonical URL
            }
        }
    }
}



export default function AllPages({ params }) {
    if( params.slug == 'affordable-seo-services.php' ||
        params.slug == 'organic-seo-services.php' ||
        params.slug == 'professional-seo-services.php' ||
        params.slug == 'seo-optimization-services.php' ||
        params.slug == 'seo-consulting-firm.php' ||
        params.slug == 'local-seo-services.php' ||
        params.slug == 'ecommerce-seo-services.php' ||
        params.slug == 'hire-dedicated-seo-resource.php' ||
        params.slug == 'apps-store-optimization-services.php' ||
        params.slug == 'dallas-seo-services.php' ||
        params.slug == 'seo-services-california.php' ||
        params.slug == 'seo-company-los-angeles-ca.php' ||
        params.slug == 'seo-company-pennsylvania.php' ||
        params.slug == 'san-diego-seo-services.php' ||
        params.slug == 'real-estate-seo-services.php'||
        params.slug == 'healthcare-seo-services.php' ||
        params.slug == 'dental-seo-marketing-services.php' ||
        params.slug == 'b2b-seo-agency.php' ||
        params.slug == 'automotive-seo-company.php' ||
        params.slug == 'law-firm-seo-services.php' ||
        params.slug == 'education-firm-seo-services.php' ||
        params.slug == 'seo-services-delhi.php' ||
        params.slug == 'social-media-marketing-agency-delhi.php' ||
        params.slug == 'ppc-company-delhi.php--HiddenPage' || // This page has been hidden
        params.slug == 'orm-services-delhi.php' ||
        params.slug == 'local-seo-services-delhi.php' ||
        params.slug == 'web-design-services-delhi.php' ||
        params.slug == 'web-development-services-delhi.php'
    ) {
        return (
          <>
              <SeoPage/>
          </>
        );
    }
    else if(params.slug == 'remove-complaints-services.php' ||
        params.slug == 'bad-reviews-removal-services.php' ||
        params.slug == 'online-reputation-management-services.php'
    ) {
        return (
          <>
              <ReputationPage/>
          </>
        );
    }
    else if(params.slug == 'web-development-services.php'||
        params.slug == 'erp-development-service.php'||
        params.slug == 'core-php-development.php'||
        params.slug == 'e-commerce-development.php'||
        params.slug == 'laravel-development-service.php'||
        params.slug == 'web-application-development-service.php'||
        params.slug == 'psd-to-html-conversion-service.php'||
        params.slug == 'website-designing-services.php'||
        params.slug == 'website-redesigning-services.php'||
        params.slug == 'logo-designing-service.php'||
        params.slug == 'wordpress-development-services.php'||
        params.slug == 'moodle-development-services.php'||
        params.slug == 'drupal-development-services.php'){
        return (
            <>
                <WebPage/>
            </>
        );
    }
    else if (
        params.slug == "seo-packages.php" ||
        params.slug == "smo-packages.php" ||
        params.slug == "local-seo-packages.php" ||
        params.slug == "orm-packages.php" ||
        params.slug == "ppc-packages.php" || // This page has been hidden
        params.slug == "aso-packages.php") {
        return (
          <>
            <Package />
          </>
        );
    } else if (
        params.slug == "VA-Real-Estate.php" ||
        params.slug == "virtual-assistant.php" ||
        params.slug == "lead_generation.php" ||
        params.slug == "email_assistance.php" ||
        params.slug == "administration_services.php" ||
        params.slug == "bookkeeping.php" ||
        params.slug == "by_posts_and_content.php") {
        return (
          <>
            <VirtualPage />
          </>
        ); 
    } else if (params.slug == 'google-ads-services.php--HiddenPage' ||  // This page has been hidden
        params.slug == 'facebook-ads-services.php' || 
        params.slug == 'linkedin-ads-services.php' || 
        params.slug =='quora-ads-services.php' )  {
        return (
          <>
              <AdvertisingPage/>
          </>
        );
    } else if (
        params.slug == "facebook-marketing-services.php" ||
        params.slug == "instagram-marketing-service.php" ||
        params.slug == "pinterest-marketing-service.php" ||
        params.slug == "linkedin-marketing-service.php" ||
        params.slug == "twitter-marketing-service.php") {
        return (
          <>
            <SocialMedia />
          </>
        );
    } else if (
        params.slug == "android-app-development-service.php" ||
        params.slug == "ios-app-development-service.php" ||
        params.slug == "native-app-development-service.php" ||
        params.slug == "hybrid-app-development-service.php" ) {
        return (
          <>
            <MobileApps />
          </>
        );
    } else if (
        params.slug == "partner-with-us.php" ) {
        return (
          <>
            <Partners />
          </>
        );
    } else if (
        params.slug == "request-for-quote.php" ) {
        return (
          <>
            <Request />
          </>
        );
    }
    else{
        return Error();
    }
}
