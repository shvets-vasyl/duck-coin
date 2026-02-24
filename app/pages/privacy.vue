<template>
  <main class="privacy-page">
    <CommonHeader />
    <CommonMenu />

    <PageDocsHero :data="heroData" />
    <PageDocsInfo :data="infoData" />

    <CommonFooter />
  </main>
</template>

<script setup lang="ts">
const heroData = {
  title: "Privacy policy",
  descr: "Last Updated: 19 February 2026",
}

const infoData = {
  title: "",
  descr: `
	This Privacy Policy explains how the decentralized Duck project team («we», «us», «our») collects, uses, and protects information during your access and use of the website <a href="https://itsduck.com/whitelist" target="_blank">
          https://itsduck.com/whitelist</a
        > (the «Site»).
	`,
  textBlock: `
	PLEASE READ THIS PRIVACY POLICY CAREFULLY BEFORE USING THE SITE OR OBTAINING SERVICES THROUGH THE SITE. BY USING THE SITE, YOU AGREE TO THE TERMS OF THIS PRIVACY POLICY.
`,
  items: [
    {
      title: "1. SCOPE OF THIS PRIVACY POLICY",
      descr: `
			1.1. This Privacy Policy describes the processing of Personal Data (any information relating to an identified or identifiable living natural person) provided or collected on the Site. We comply with this Privacy Policy in accordance with the applicable laws in the regions where we operate. Our Terms of Service should be read in conjunction with this Privacy Policy.
			<br><br>
			1.2. Please note that our Site may contain links to other websites that are not owned or controlled by us, and we are not responsible for the privacy practices of such websites. We encourage you to be aware when you leave our Site and to read the privacy policies of other websites that may collect and process your Personal Data.
			<br><br>
			1.3. This Privacy Policy applies to the following individuals:
			<br><br>
			1.3.1. individuals who use the Site (for the purposes of this Privacy Policy, we define the terms «visitor», «you», and «your» as a person who has access to the Site);
			<br><br>
			1.3.2. individuals who contact us on the Site or via any contact forms available on the Site;
			<br><br>
			1.3.3. individuals who submit complaints to us via email.

		`,
    },
    {
      title: "2. PRINCIPLES OF DATA PROCESSING ",
      descr: `
			2.1. In accordance with global privacy best practices, we adhere to the following principles to protect your privacy:
			<br><br>
			2.1.1. Principle of lawfulness, fairness, and transparency: we process Personal Data lawfully, fairly, and in a transparent manner in relation to the data subject;
			<br><br>
			2.1.2. Principle of purpose limitation: we collect Personal Data for specified, explicit, and legitimate purposes and do not further process it in a manner that is incompatible with those purposes;
			<br><br>
			2.1.3. Principle of data minimisation: we collect adequate Personal Data that is relevant and limited to what is necessary for the purposes for which we process Personal Data;
			<br><br>
			2.1.4. Principle of accuracy: we collect adequate Personal Data that is relevant and limited to what is necessary for the purposes for which we process Personal Data;
			<br><br>
			2.1.5. Principle of storage limitation: we keep Personal Data in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the Personal Data is processed;
			<br><br>
			2.1.6. Principle of integrity and confidentiality: we process Personal Data in a manner that ensures appropriate security of the Personal Data, including protection against unauthorised or unlawful processing and against accidental loss, destruction, or damage, using appropriate technical or organisational measures.
		`,
    },
    {
      title: "3. WHAT DATA WE COLLECT",
      descr: `
			3.1. Due to the specific nature of our decentralised Web3 project, we minimise the collection of any data to the greatest extent possible. We only collect the following categories of information.
			<br><br>
			3.2. Data you provide directly:
			<br><br>
			3.2.1. Crypto wallet address: We use public blockchain addresses to identify a visitor's journey on the Site. We do not use this data for any purposes on an individual level. Please note that we are not responsible for your use of any blockchain or for your data processed in these permissionless decentralised networks. We collect this information when you connect your Web3 wallet (e.g., MetaMask) to interact with our smart contracts through the Site.
			<br><br>
			3.2.2. Email address: We collect your email address only if you voluntarily choose to leave it in the forms on the Site or by communicating with us via the email address specified in this Privacy Policy.
			<br><br>
			3.2.3. Any additional personal data you deem necessary to provide to us.
			<br><br>
			3.3. We may collect Personal Data from you in various ways and under various circumstances, including, but not limited to:
			<br><br>
			3.3.1. accessing the Site;
			<br><br>
			3.3.2. replying to emails sent to you;
			<br><br>
			3.3.3. collecting Personal Data contained in collected/used online identifiers;
			<br><br>
			3.3.4. providing feedback.
			<br><br>
			3.4. We reserve the right to combine Personal Data collected during your interaction with various sections of the Site and our social media with any other relevant information.
			<br><br>
			3.5. During your visit to the Site, our hosting server and web infrastructure may automatically collect basic technical information, which includes:
			<br><br>
			3.5.1. IP address;
			<br><br>
			3.5.2. Browser type and version;
			<br><br>
			3.5.3. Operating system;
			<br><br>
			3.5.4. Date and time of access;
			<br><br>
			3.5.5. Technical server logs.
			<br><br>
			3.6. We strictly do not engage in automated profiling of users, do not collect sensitive personal data, and do not have access to personal files or data on your device.
		`,
    },
    {
      title: "4. USE OF YOUR PERSONAL DATA",
      descr: `
			4.1. We may use your Personal Data for various purposes, primarily to provide information about the Site and its operation. We may also use Personal Data for other purposes permitted by law. We may use your Personal Data for such purposes, including, but not limited to:
			<br><br>
			4.1.1. providing access to the Site;

			<br><br>
			4.1.2. ensuring compliance with agreements;
			<br><br>
			4.1.3. providing a more meaningful and better user experience with the Site;
			<br><br>
			4.1.4. detecting, investigating, and preventing illegal activities or conduct that may violate the Terms of the Site and this Privacy Policy;
			<br><br>
			4.1.5. fraud protection, security, and bug-fixing measures;
			<br><br>
			4.1.6. personalising your experience with the Site or displaying content that we believe will be of interest to you;
			<br><br>
			4.1.7. contacting you and conducting surveys or questionnaires you choose to participate in, and analysing the collected data for market research purposes;
			<br><br>
			4.1.8. conducting internal research and development, as well as improving, testing, and expanding the Site's features;
			<br><br>
			4.1.9. responding to your correspondence, contacting you when necessary and/or upon your request, and/or sending you information about the Site;
			<br><br>
			4.1.10. sending emails and other communications according to your preferences;
			<br><br>
			4.1.11. marketing and promoting the Site;
			<br><br>
			4.1.12. complying with our internal and external audit requirements, including our information security obligations;
			<br><br>
			4.1.13. tracking usage data;
			<br><br>
			4.1.14. protecting our property rights or your rights, or the rights of third parties;
			<br><br>
			4.1.15. responding to claims that publications or other content violate the rights of third parties;
			<br><br>
			4.1.16. interacting with public blockchain data (analysing wallet addresses and transactions to provide visitors with the Site's data and features);
			<br><br>
			4.1.17. any other purpose that, in our sole discretion, is necessary or required to ensure the security and/or integrity of our visitors, employees, third parties, the public, and/or the Site, or to comply with the requirements of any applicable law.
		`,
    },
    {
      title: "5. CONSENT TO PERSONAL DATA PROCESSING",
      descr: `
			5.1. By providing your Personal Data and using the Site, you confirm that you bear full responsibility for all your actions and fully understand the provisions set forth in this Privacy Policy.
			<br><br>
			5.2. By transferring your Personal Data to us via the Site or otherwise, you irrevocably and unconditionally consent and agree that we have the right, in accordance with this Privacy Policy, to:
			<br><br>
			5.2.1. process in any manner, including collect, store, use, disclose, share, and transfer (including cross-border), your Personal Data provided to us, as well as your Personal Data collected as a result of your use of the Site (i.e., your Personal Data that we collect automatically and/or from other sources);
			<br><br>
			5.2.2. use cookies and other similar technologies to collect your Personal Data.
		`,
    },
    {
      title: "6. YOUR PRIVACY RIGHTS",
      descr: `
			6.1. Your privacy rights include the following:
			<br><br>
			6.1.1. Right to access: You may contact us to obtain confirmation as to whether or not we are processing your Personal Data. If we are processing your Personal Data, we will inform you of the categories of your Personal Data we process, the purposes of the processing, the categories of recipients to whom the Personal Data has been or will be disclosed, and the envisaged storage period or the criteria used to determine that period;
			<br><br>
			6.1.2. Right to restriction of processing: You have the right to request that we restrict the processing of your Personal Data as provided by applicable data protection laws, for example, to allow us to verify the accuracy of the Personal Data after you contest its accuracy, or to prevent us from deleting Personal Data when it is no longer needed for processing purposes but is still required by you for legal claims, or if our processing is unlawful. Restriction of processing may result in reduced capabilities to use the Site;
			<br><br>
			6.1.3. Right to data portability: You have the right to receive your Personal Data from us in a structured, commonly used, and machine-readable format, and to transmit that data to a third party independently, if our processing is based on your consent and carried out by automated means;
			<br><br>
			6.1.4. Right to lodge a complaint: You have the right to complain about our data processing practices by contacting us at hello@itsduck.com.
			<br><br>
			6.2. To exercise any of the rights mentioned above, you should primarily use the features offered by the Site. If such features are insufficient to exercise these rights, you must send us a letter or email to the address specified in this Privacy Policy. We may request additional information necessary to confirm your identity. We may reject requests that are unreasonably repetitive, excessive, or manifestly unfounded.


		`,
    },
    {
      title: "7. DATA STORAGE AND DELETION",
      descr: `
			7.1. We store your Personal Data for as long as necessary to provide you with access to the Site. We may store Data longer, but only in such a way that it cannot be linked to you. When Personal Data is no longer needed, we delete it using reasonable measures to protect it from unauthorised access or use.
			<br><br>
			7.2. Storage rules may vary depending on the territory of Data collection and applicable law, but we always strive to retain information only as long as necessary to provide, improve, or personalise the Site.
			<br><br>
			7.3. We care about ensuring the security of Personal Data. We follow generally accepted industry standards to protect the information provided to us, both during transmission and after receipt. We implement technical, physical, and administrative security measures to ensure reasonable protection of your Personal Data. When we or our contractors process your Data, we also ensure that your Data is protected against unauthorised access, loss, manipulation, falsification, destruction, or unauthorised disclosure. This is achieved through appropriate administrative, technical, and physical measures.
			<br><br>
			7.4. By accepting this Privacy Policy, you acknowledge your understanding that there is no 100% secure method of transmission over the Internet or electronic data storage system. Therefore, we cannot guarantee its absolute security.

		`,
    },
    {
      title: "8. SPECIFIC CATEGORIES OF DATA",
      descr: `
			8.1. We do not seek to collect sensitive personal data (racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, as well as genetic data, biometric data, data concerning a person's sex life or sexual orientation) from anyone. Please do not share any sensitive personal data with us if you do not want us to collect it.

		`,
    },
    {
      title: "9. CONTRACTORS (THIRD PARTIES)",
      descr: `
			9.1. We collaborate with third-party service providers who provide website development, application, hosting, technical support, and other services for us. These contractors may have access to Personal Data or process it on our behalf as part of providing these services. We limit the amount of information provided to such service providers to what is reasonably necessary for them to perform their functions.
			<br><br>
			9.2. We may share your Personal Data with our professional advisors (lawyers, bankers, auditors, etc.), as well as with our employees and other personnel in connection with the services/work they provide to us. If we transfer your Personal Data to these processors, we will require the recipient to maintain its confidentiality and security. To provide you (or your organisation) with access to the Site, we may provide Personal Data to courts, lawyers advising other parties to a matter, or other professionals (e.g., foreign law firms, patent attorneys, accountants, or advocates).


		`,
    },
    {
      title: "10. COOKIES AND ANALYTICS",
      descr: `
			10.1. We also use cookies. A cookie is a small data file containing a string of characters that is sent to your computer when you visit a website.
			<br><br>
			10.2. Cookies help remember your preferences, keep you logged into the Site, allow you to navigate efficiently between pages, and otherwise improve the Site's performance. Some cookies are necessary for the functioning of the Site and/or help improve performance and provide analytics data. Some of the cookies are used for marketing purposes.
			<br><br>
			10.3. In the course of your use of the Site, we use necessary (essential) cookies. Such cookies are intended for navigation, providing services, and preventing security threats.
			<br><br>
			10.4. Additionally, we may use the following additional cookies:
			<br><br>
			10.4.1. Functional cookies: designed to remember user choices on the Site. Functional cookies are used to remember the settings each User made while using available functions. If you disable these cookies, certain sections of the Site or its parts may not function properly;
			<br><br>

			10.4.2. Performance (analytical) cookies: allow us to track visits and traffic sources. These files are used to evaluate and improve the Site's performance characteristics. Using performance cookies, we can evaluate and analyse how users use the Site, enabling us to determine which pages are the most and least popular. The data can be used to improve the user experience;
			<br><br>

			10.4.3. Targeting or advertising cookies: allow broadcasting advertisements tailored to you. The files limit the number of times a certain ad is shown to users and help us determine the effectiveness of marketing campaigns. We may use the information obtained through such cookies to offer advertisements that may be of interest to a specific user based on prior online behaviour.
			<br><br>
			10.5. Refusing the use of necessary and functional cookies may result in restricted access to some functions of the Site. To disable, delete, or block Cookies, you must change the Cookie settings in your browser. Such settings are usually found in the «Options» or «Preferences» menu of your internet browser.


		`,
    },
    {
      title:
        "11. YOUR INTERNATIONAL DATA RIGHTS (EU, USA, CANADA, AND AUSTRALIA)",
      descr: `
			11.1. Depending on your place of residence, you may be granted specific rights regarding your personal information under local law. We respect global privacy standards, including the General Data Protection Regulation (GDPR) in the EU, the California Consumer Privacy Act (CCPA) and other state laws in the USA, the Personal Information Protection and Electronic Documents Act (PIPEDA) in Canada, and the Privacy Act 1988 in Australia.

		`,
    },
    {
      title: "12. IMPORTANT TECHNOLOGICAL LIMITATION (BLOCKCHAIN SPECIFICS)",
      descr: `
			12.1. Please note that the aforementioned rights can be exercised exclusively with respect to data stored off-chain. However, due to the immutable and public nature of blockchain technology, we cannot fulfil requests to edit, hide, or delete any on-chain data. This includes your Web3 wallet address, transaction hashes, and token balances. This data is recorded in a public ledger forever, and we have no technical ability to erase it. This technological feature is at the core of decentralised networks and takes precedence over data deletion requests.

		`,
    },
    {
      title: "13. CHILDREN'S PRIVACY",
      descr: `
			13.1. The Site is not intended for use by children under 18 years of age. We do not knowingly collect or maintain information from persons under 18 years of age.
			<br><br>
			13.2. If we become aware that we have inadvertently collected personal information from a child under 18 years of age, we will take all reasonable steps to delete such information from our records.
			<br><br>
			13.3. We also recommend that parents monitor their children's Internet activities and learn and use software or other tools that can help their children enjoy their online experience without compromising their personal safety or allowing them to use the Internet in a manner contrary to their parents'/guardians' preferences.


		`,
    },
    {
      title: "14. DISPUTE RESOLUTION",
      descr: `
			14.1. This Privacy Policy is an integral part of our Terms of Service. Any disputes, controversies, or claims arising in connection with this Privacy Policy or the processing of your data shall be governed, construed, and resolved exclusively in accordance with the Dispute Resolution and Arbitration provisions set forth in our Terms of Service.

		`,
    },
    {
      title: "15. MISCELLANEOUS PROVISIONS ",
      descr: `
			15.1. Acceptance of this Privacy Policy. We consider that all visitors have carefully read this Privacy Policy and agree to its content. If anyone disagrees with this Privacy Policy, they should refrain from using this Site.
			<br><br>
			15.2. Changes and updates. From time to time, we may update this Privacy Policy. We recommend that you periodically check and review this Privacy Policy so that you always know what data we collect, how we use it, and with whom we share it. Our updated Privacy Policy takes effect upon posting on the Site. Your continued visit to the Site is deemed as your acceptance of the updated Privacy Policy.

		`,
    },
    {
      title: "CONTACT US",
      descr: `
Іf you have any questions, suggestions, or comments regarding this Privacy Policy, please contact us via email at: <a href="mailto:hello@itsduck.com">hello@itsduck.com</a>
			`,
    },
  ],
}
</script>

<style scoped lang="scss"></style>
