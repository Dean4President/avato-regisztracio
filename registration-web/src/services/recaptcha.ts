import { RecaptchaEnterpriseServiceClient } from "@google-cloud/recaptcha-enterprise";
import { useEffect } from "preact/hooks";

export const useGoogleRecaptchaScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        
        script.src = 'https://www.google.com/recaptcha/enterprise.js';
        script.async = true;
        script.defer = true;
    
        document.head.appendChild(script);
    }, []);
}

export const createAssesment = async (token: string, action: string) => {
    const client = new RecaptchaEnterpriseServiceClient();
    const projectPath = client.projectPath(import.meta.env.VITE_PROJECT_ID);

    const request = ({
        assessment: {
            event: {
                token: token,
                siteKey: import.meta.env.VITE_RECAPTCHA_KEY,
            },
        },
        parent: projectPath,
    });

    const [ response ] = await client.createAssessment(request);

    if (!response.tokenProperties!.valid) {
        console.log(`The CreateAssessment call failed because the token was: ${response.tokenProperties!.invalidReason}`);
        return null;
    }

    if (response.tokenProperties!.action === action) {
        console.log(`The reCAPTCHA score is: ${response.riskAnalysis!.score}`);
        response.riskAnalysis!.reasons!.forEach((reason) => {
            console.log(reason);
        });
        return response.riskAnalysis!.score;
    }
    else {
        console.log("The action attribute in your reCAPTCHA tag does not match the action you are expecting to score");
        return null;
    }
}