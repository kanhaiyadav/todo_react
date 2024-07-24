import React from 'react'
import { Info, SorryContainer } from './Sorry.styles'
import sorryImage from '../../assets/404 error with people holding the numbers-pana.png'
import CustomButton from '../CustomButton/CustomButton.component';
import { selectName } from '../../Redux/user/user.selector';
import { useSelector } from 'react-redux';

const Sorry = ({ topic }) => {
    const name = useSelector(selectName);
    const content = {
        reportBug: "You can still report a bug through an email ",
        feedback: "You can still give feedback through an email ",
        suggestFeature: "You can still suggest a feature through an email "
    }
    const Subject = {
        reportBug: "Report a Bug",
        feedback: "Feedback for the Developer",
        suggestFeature: "Suggestions for a Feature"
    }
    const Body = {
        reportBug: `
        Hi Developer,

I hope this email finds you well. I am writing to report a bug that I encountered while using you Todo app. Below are the details of the bug:

1. Summary:

Title: [Brief Description of the Bug]
Date and Time: [When the bug occurred]
Reported by: ${name} 
Phone number: [Contact Information]

2. Description:
A detailed description of the issue, including steps to reproduce it:

[Step 1]
[Step 2]
[Step 3]
[Additional Steps]

3. Expected Result:
[Describe what you expected to happen]

4. Actual Result:
[Describe what actually happened]

5. Environment:

Operating System: [e.g., Windows 10, macOS 11.4]
Browser (if applicable): [e.g., Chrome 91.0, Firefox 89.0]
Application Version:  v1.2.3
Device: [e.g., Desktop, Mobile, Tablet]

6. Screenshots/Video (if applicable):
[Attach any relevant screenshots or videos that illustrate the bug]

7. Additional Information:
[Any other information that might be relevant, such as error messages, logs, or a description of any recent changes that might have triggered the issue]

I appreciate your attention to this matter and look forward to a resolution. Please let me know if you need any further information.

Thank you for your assistance.

Best regards,

${name}
[Your Contact Information]
        `,
        feedback: `Hi Developer,

I hope this message finds you well. I recently used your Todo and wanted to share some feedback based on my experience.

Overall Experience:
[Describe your overall experience with the web app. Mention what you liked and any positive aspects.]

Positive Aspects:

[Positive aspect 1]
[Positive aspect 2]
[Positive aspect 3]


Areas for Improvement:

[Area 1]: [Description of the issue or suggestion for improvement]
[Area 2]: [Description of the issue or suggestion for improvement]
[Area 3]: [Description of the issue or suggestion for improvement]


Additional Comments:
[Include any additional comments, suggestions, or insights that you believe could be beneficial for the development team.]

Conclusion:
Overall, I find this app to be [summary]. With a few improvements, it could be even more effective and user-friendly.

Thank you for taking the time to consider my feedback. Please feel free to reach out if you have any questions or need further details.

Best regards,

${name}
[Your Contact Information]`,
        suggestFeature: `Hi Developer,

I hope this email finds you well. I have been using this app and find it incredibly useful. I wanted to suggest a feature that I believe would further enhance the user experience.

Feature Suggestion:
[Title of the Feature]

Description:
[Provide a detailed description of the feature. Explain what the feature is, how it works, and the problem it solves.]

Use Case:
[Describe specific scenarios or examples where this feature would be beneficial. Explain how users would interact with it and the value it would add.]

Benefits:

Improved User Experience: [Explain how the feature would make the app more user-friendly. if applicable]
Increased Efficiency: [Describe how the feature would save time or effort for users. if applicable]
Competitive Advantage: [Highlight how this feature could set the web app apart from competitors. if applicable]

Additional Details:
[Include any additional details, such as mockups, diagrams, or references to similar features in other applications that could help illustrate your suggestion.]

Conclusion:
I believe this feature would be a valuable addition to the app and greatly improve the overall user experience. I would be happy to discuss this further or provide more details if needed.

Thank you for considering my suggestion. I look forward to hearing your thoughts.

Best regards,

${name}
[Your Contact Information]`
    }

    const handleEmailClick = () => {
        const subject = encodeURIComponent(Subject[topic]);
        const body = encodeURIComponent(Body[topic]);
        const mailtoLink = `mailto:kanhaiya2004yadav@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    }
    return (
        <SorryContainer>
            <h1>Sorry, Page Not Found</h1>
            <div><img src={sorryImage} alt="404 error" /></div>
            <Info>
                <p>Sorry, the page you are looking for has not been built by the developer yet.</p>
                <p>Please try the following:</p>
                <ul>
                    <li>{content[topic]}<CustomButton effect={'scale'} onClick={handleEmailClick}>Click Here</CustomButton></li>
                    <li>Return to the <a href="/home">home page</a></li>
                </ul>
                <p>Thank you for your co-operation. 😊</p>
            </Info>
        </SorryContainer>
    )
}

export default Sorry;