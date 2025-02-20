class PolarWavesChatbot {
    constructor() {
        this.questions = {
            "What is POLAR WAVES?": "POLAR WAVES is a solar-powered heating and cooling apparel designed for extreme weather conditions.",
            "How does POLAR WAVES work?": "It uses solar fabric panels, a rechargeable battery, and thermal pads to regulate temperature based on user preference.",
            "Who can benefit from POLAR WAVES?": "It is ideal for military personnel, delivery workers, outdoor professionals, athletes, and urban commuters.",
            "How long does the battery last?": "The battery lasts between 6 to 10 hours per full charge, depending on usage.",
            "Where can I buy POLAR WAVES?": "You can purchase it on Amazon, Flipkart, and our official website.",
            "Do you offer bulk discounts?": "Yes! Bulk purchases for corporate and government clients come with discounts. Contact us for details.",
            "Is POLAR WAVES safe to use?": "Yes! It has built-in safety features like temperature control and automatic shut-off.",
            "Can I wash POLAR WAVES?": "Yes, the electronic components are removable, making it easy to clean.",
            "Does POLAR WAVES work in extreme cold temperatures?": "Yes! The heating function keeps you warm in freezing conditions.",
            "How does the cooling system work?": "It regulates temperature using breathable fabric and cooling elements, keeping you refreshed in hot climates.",
            "Does POLAR WAVES require external charging?": "No, it primarily runs on solar energy, but the rechargeable battery supports it in low sunlight.",
            "How does POLAR WAVES help the environment?": "It reduces reliance on electricity, lowers carbon footprints, and is made with sustainable materials.",
            "What industries can benefit from POLAR WAVES?": "Defense, construction, logistics, agriculture, outdoor sports, and medical applications.",
            "How can I become a distributor for POLAR WAVES?": "Fill out our distributor inquiry form on our website, and we’ll get in touch!",
            "How much does POLAR WAVES cost?": "Pricing starts at approximately ₹3,200 per jacket.",
            "Do you provide warranty or returns?": "Yes, we offer a one-year warranty and a return policy within a specified period.",
            "Can I adjust the temperature manually?": "Absolutely! The jacket comes with manual controls for heating and cooling.",
            "How long does it take to fully charge POLAR WAVES?": "A few hours of sunlight provide enough charge for extended use.",
            "What happens if there's no sunlight?": "The built-in battery stores energy, ensuring functionality even in low-light conditions.",
            "Is POLAR WAVES waterproof?": "Yes, the jacket has water-resistant fabric for light rain and spills.",
            "Can I use POLAR WAVES for sports activities?": "Yes, it is perfect for hiking, skiing, cycling, and other outdoor sports.",
            "Does POLAR WAVES come in different sizes?": "Yes, we offer multiple sizes to fit different body types.",
            "Can I customize the jacket?": "Yes! We offer customizations for bulk orders, including logo printing.",
            "How do I track my order?": "You can track your order through our website using your order ID.",
            "What is the return process?": "Returns are accepted within 30 days of purchase if the item is in original condition.",
            "Does the jacket have an automatic temperature adjustment feature?": "Yes! It can automatically adjust based on surrounding temperatures.",
            "What is the weight of POLAR WAVES?": "It is lightweight and designed for comfortable long-term use.",
            "Does POLAR WAVES come in different colors?": "Yes, we currently offer black, navy blue, and gray variants.",
            "Is POLAR WAVES suitable for elderly people?": "Yes, it is designed to be user-friendly for all age groups.",
            "Can I wear POLAR WAVES while riding a bike?": "Yes! It is designed for outdoor commuters, including bikers.",
            "Is there a kids' version of POLAR WAVES?": "We are working on launching a kids' version soon!",
            "Does POLAR WAVES support a mobile app for control?": "We are developing an app for easier temperature adjustments.",
            "How does POLAR WAVES handle sweat and moisture?": "The breathable fabric helps in moisture-wicking to keep you dry.",
            "Can I wear POLAR WAVES in extremely humid conditions?": "Yes, it is designed to function effectively in humid environments.",
            "What is the expected lifespan of POLAR WAVES?": "With proper care, it can last several years.",
            "Does POLAR WAVES come with a travel case?": "Yes, it comes with a compact storage bag for easy transport.",
            "Is the battery replaceable?": "Yes, the battery is replaceable and available for purchase separately.",
            "Can POLAR WAVES be used for medical purposes?": "Yes, it is ideal for patients who need controlled temperatures.",
            "How do I clean the jacket?": "The electronic components can be removed for easy washing of the fabric.",
            "Does POLAR WAVES have an emergency heating function?": "Yes, it has a quick-heating mode for sudden cold conditions."
        };
    }

    getResponse(question) {
        const lowerCaseQuestion = question.toLowerCase();
        for (const key in this.questions) {
            if (lowerCaseQuestion.includes(key.toLowerCase())) {
                return this.questions[key];
            }
        }
        return "I'm not sure about that. Can I help you with something else?";
    }
}
