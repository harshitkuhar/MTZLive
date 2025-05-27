import * as Yup from "yup";

export const WebsiteFormValidation = Yup.object({
    name: Yup.string().min(4, "Name must be atleast 4 Characters").required("This field is required!"),
    email: Yup.string().email("Email must be Valid").required("This field is required!"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number field must be of type number and of exactly 10 digits").required("This field is required!")
})

export const WebFormValidation = Yup.object({
    name: Yup.string().min(4, "Name must be atleast 4 Characters").required("This field is required!"),
    email: Yup.string().email("Email must be Valid").required("This field is required!"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number field must be of type number and of exactly 10 digits").required("This field is required!"),
    website: Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!').required('Website field is required!'),
})

export const ContactFormValidation = Yup.object({
    name: Yup.string().min(4, "Name must be atleast 4 Characters").required("This field is required!"),
    email: Yup.string().email("Email must be Valid").required("This field is required!"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number field must be of type number and of exactly 10 digits").required("This field is required!"),
    website: Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!').required('Website field is required!'),
    monthly_budget: Yup.number().typeError('Please enter a valid number for the budget.').required('Monthly budget field is required!')
})

export const PopupFormValidation = Yup.object({
    name: Yup.string().min(4, "Name must be atleast 4 Characters").required("This field is required!"),
    email: Yup.string().email("Email must be Valid").required("This field is required!"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number field must be of type number and of exactly 10 digits").required("This field is required!"),
    website: Yup.string().url().required('This field is required!')
})

export const StripeFormValidation = Yup.object({
    email: Yup.string().email("Email must be Valid").required("Email field is required!"),
    pay_type: Yup.string().required("Please Select Payment Type!"),
    item_name: Yup.string().required("Item Name is required!"),
    price: Yup.number().typeError('Please enter a valid number for the price.').test(
            value => {
            // Convert the value to a number and round it to two decimal places if it contains a decimal
            if (value && value.toString().includes('.')) {
                // Round the value to two decimal places
                value = parseFloat(value).toFixed(2);
            }
            return true; // Always return true, as we're only rounding if necessary
            }
        ).required("Price field is required!"),
    currency: Yup.string().required("Please Select Currency!"),
    
})

export const PartnerFormValidation = Yup.object({
    name: Yup.string().min(4, "Name must be atleast 4 Characters").required("This field is required!"),
    email: Yup.string().email("Email must be Valid").required("This field is required!"),
    telephone: Yup.string().matches(/^[0-9]/, "Telephone field must be of type number").required("This field is required!"),
    mobile: Yup.string().matches(/^[0-9]{10}$/, "Mobile field must be of type number and of exactly 10 digits").required("This field is required!"),
    country: Yup.string().required("This field is required!"),
    currency: Yup.string().required("This field is required!"),
    businesssize: Yup.string().required("This field is required!"),
})

export const RequestFormValidation = Yup.object({
    name: Yup.string().min(4, "Name must be atleast 4 Characters").required("This field is required!"),
    email: Yup.string().email("Email must be Valid").required("This field is required!"),
    telephone: Yup.string().matches(/^[0-9]/, "Telephone field must be of type number").required("This field is required!"),
    mobile: Yup.string().matches(/^[0-9]{10}$/, "Mobile field must be of type number and of exactly 10 digits").required("This field is required!"),
    country: Yup.string().required("This field is required!"),
    city: Yup.string().required("This field is required!"),
    website: Yup.string().url().required('This field is required!'),
})

export const ContactUsValidation = Yup.object({
    name: Yup.string().min(4, "Name must be atleast 4 Characters").required("This field is required!"),
    email: Yup.string().email("Email must be Valid").required("This field is required!"),
    subject: Yup.string().required("This field is required!"),
})

export const SidebarContactFormValidation = Yup.object({
    name: Yup.string().min(4, "Name must be atleast 4 Characters").required("This field is required!"),
    email: Yup.string().email("Email must be Valid").required("This field is required!"),
    phone: Yup.string().matches(/^[0-9]{10}$/, "Phone number field must be of type number and of exactly 10 digits").required("This field is required!"),
    website: Yup.string().matches(/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/, 'Enter correct url!').required('This field is required!'),
})