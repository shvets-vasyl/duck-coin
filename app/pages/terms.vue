<template>
  <main class="terms-page">
    <CommonHeader />
    <CommonMenu />

    <PageDocsHero :data="heroData" />
    <PageDocsInfo :data="infoData" />

    <CommonFooter />
  </main>
</template>

<script setup lang="ts">
const heroData = {
  title: "Terms of service",
  descr: "Last Updated: 19 February 2026",
}

const infoData = {
  title: "Welcome to Duck!",
  descr: `
	These Terms of Service («Terms») constitute a legally binding agreement
        between you («User», «you», or «your») and the decentralized Duck team (
        «we», «us», or «our») (each a «Party» and collectively the «Parties»)
        operating the web interface at
        <a href="https://itsduck.com/whitelist" target="_blank">
          https://itsduck.com/whitelist</a
        >.
	`,
  textBlock: `
	THESE TERMS CONTAIN A BINDING ARBITRATION PROVISION. PLEASE READ SECTION 13 CAREFULLY. BY AGREEING TO THESE TERMS, YOU AGREE TO RESOLVE DISPUTES THROUGH INDIVIDUAL ARBITRATION AND WAIVE YOUR RIGHT TO A JURY TRIAL OR TO PARTICIPATE IN CLASS ACTIONS.
					<br />
					<br />
THE SERVICES ARE NON-CUSTODIAL. YOU ACKNOWLEDGE THAT YOU USE THE SERVICES AT YOUR OWN RISK, AND WE DO NOT CONTROL YOUR ASSETS OR GUARANTEE ANY OUTCOMES.
`,
  items: [
    {
      title: "1. ACCEPTANCE OF TERMS",
      descr: `
		1.1. By accessing, using, or clicking «Connect Wallet» on the website https://itsduck.com/whitelist (the "Site" or "Services"), which acts solely as a graphical user interface to facilitate your interaction with decentralized smart contracts, you agree to be bound by these Terms. If you do not agree with these Terms, you must immediately stop using the Services. You provide your consent by the actual use of the Site and its functionality.
		`,
    },
    {
      title: "2. MODIFICATION OF TERMS",
      descr: `2.1. We reserve the right, at our sole discretion, to modify these Terms at any time. If we make changes, we will update the date at the top of these Terms. Your continued use of the Services after the effective date of the updated Terms constitutes your acceptance of them.`,
    },
    {
      title: "3. ELIGIBILITY AND PROHIBITED JURISDICTIONS",
      descr: `
			3.1. By accessing the Services, you affirm that you are at least 18 years of age (or the age of majority in your jurisdiction), have the full right, power, and legal capacity to enter into these Terms, and are not prohibited by any applicable law, regulation, or court order from accessing or using the Services.
			`,
    },
    {
      title: "3. ELIGIBILITY AND PROHIBITED JURISDICTIONS",
      descr: `
			3.1. By accessing the Services, you affirm that you are at least 18 years of age (or the age of majority in your jurisdiction), have the full right, power, and legal capacity to enter into these Terms, and are not prohibited by any applicable law, regulation, or court order from accessing or using the Services.
			<br><br>
			3.2. You represent and warrant that you are not:
			<br><br>
			3.2.1. named on any economic sanctions list administered by the UK Government (HM Treasury), the US Government (including the OFAC Specially Designated Nationals List), the European Union, or the United Nations;
			<br><br>
			3.2.2. located in, organized in, or a resident of Cuba, Iran, North Korea, Syria, the Crimea, Donetsk, or Luhansk regions of Ukraine, or any other jurisdiction where the use of the Services is prohibited by Applicable Law (each, a «Prohibited Jurisdiction»);
			<br><br>
			3.2.3. using the Services to facilitate illegal activity, including but not limited to money laundering, terrorist financing, or evasion of sanctions.
			<br><br>
			3.3. You agree not to use any virtual private network (VPN), proxy, or other anonymity tools to circumvent any geoblocking or restrictions applied by the Interface.
			<br><br>
			3.4. We reserve the right to restrict or block access to the Services from certain IP addresses or jurisdictions at our sole discretion to ensure compliance with legal obligations, including the UK Financial Promotions Regime and US Securities laws.
			`,
    },
    {
      title: "4. SERVICES: ARCHITECTURE AND LIMITATIONS",
      descr: `
4.1. We provide the Site solely as a hosted graphical user interface to facilitate your interaction with the decentralized Duck project smart contracts (the «Smart Contracts»). These Smart Contracts are a set of immutable algorithms deployed on a public blockchain network:
<br><br>
4.1.1. We never store, possess, or have access to your digital assets. You retain exclusive control over your private keys and wallets.
<br><br>
4.1.2. The execution of the Smart Contracts occurs automatically at the blockchain level. We cannot intervene in their operation, programmatically cancel transactions, recover lost funds, or freeze your wallet.
<br><br>
4.2. The Site may display information about your assets or presale participation status (e.g., your «DUCK Balance»):
<br><br>
4.2.1. You acknowledge that any DUCK token balance you see on the Site before the official token unlock is merely a visual abstraction and a digital record in the Smart Contracts, not actual liquid tokens in your wallet.
<br><br>
4.2.2. In the event of blockchain network congestion or RPC node failures, information on the Site may be updated with a delay. We are not responsible for any decisions made based on temporarily inaccurate or outdated data on the Site.
<br><br>
4.3. Interacting with the presale involves sending transactions directly to the blockchain, which carries specific decentralized environment risks:
<br><br>
4.3.1. Executing Smart Contracts requires paying fees to network validators. These fees are beyond our control, non-refundable, and may spike during periods of high demand.
<br><br>
4.3.2. Due to high volatility and network delays, your transaction may be dropped by the blockchain. We do not compensate for funds lost to fees on such transactions.
<br><br>
4.3.3. The public nature of the blockchain means your transactions can be front-run by third-party automated bots (MEV). We do not guarantee transaction execution under ideal conditions for you.
<br><br>
4.4. Third-Party Infrastructure. Our Service relies on external Web3 tools to function properly:
<br><br>
4.4.1. We use third-party solutions (e.g., MetaMask and others listed on the Site) for your authorization. We are not responsible for outages, software bugs, or hacks at the level of these third-party services.
<br><br>
4.4.2. By using the Site, you expressly assume the risks associated with critical failures of the blockchain network itself, external API outages, or other force majeure events. We reserve the right to suspend or terminate the Site at any time without prior notice.
			`,
    },
    {
      title: "5. THE DUCK TOKEN AND DISCLAIMERS",
      descr: `
			5.1. The project token («DUCK») is strictly a memecoin with no functional utility, created exclusively for entertainment and social purposes. By purchasing DUCK, you expressly agree and acknowledge the following:
<br><br>
5.1.1. DUCK is not a security, investment contract, equity share, commodity, or financial instrument under the laws of any jurisdiction. The project is not registered with any financial regulator;
<br><br>
5.1.2. The token has no intrinsic value and is not backed by any physical or digital assets, company profits, or guarantees;
<br><br>
5.1.3. You are not purchasing DUCK with the expectation of generating profit, dividends, interest, or financial returns from the entrepreneurial or managerial efforts of our team;
<br><br>
5.1.4. The memecoin market is highly volatile. The price of DUCK may fluctuate drastically or drop to zero. You acknowledge the risk of a complete (100%) loss of funds spent purchasing the token;
<br><br>
5.1.5. We do not guarantee the creation of liquidity pools, token listings on decentralized (DEX) or centralized (CEX) exchanges, or that you will be able to sell or swap the token in the future. Any secondary markets form entirely organically and are outside our control;
<br><br>
5.1.6. The project has no official structure, formal roadmap, or promises regarding future ecosystem development. The team owes no fiduciary duties to token holders.

			`,
    },
    {
      title: "6. USER RESPONSIBILITIES AND CONDUCT",
      descr: `
			6.1. You are solely responsible for maintaining the security of your Web3 wallet credentials, private keys. We do not have access to your wallet and cannot recover your access, funds, or credentials if you lose them.
<br><br>
6.2. To interact with the Services, you may need to grant «token approvals» to our Smart Contracts:
<br><br>
6.2.1. It is your responsibility to monitor and revoke these approvals when they are no longer needed.
<br><br>
6.2.2. We strongly discourage granting "infinite" or "unlimited" allowances. You acknowledge that infinite approvals present a significant security risk in the event of a smart contract exploit, and you assume all risks associated with granting such approvals.
<br><br>
6.3. You agree not to use the Services for:
<br><br>
6.3.1. Engaging in any activity designed to artificially affect the pricing, demand, or distribution of the DUCK token during the presale;
<br><br>
6.3.2. Attempting to front-run, tail-gate, or otherwise manipulate transaction queues or exploit vulnerabilities in the Smart Contracts;
<br><br>
6.3.3. Using any automated interactions (bots, scripts, or crawlers) that degrade the performance of the Site for other users, launch DDoS attacks, or attempt to bypass presale allocation limits.

			`,
    },
    {
      title: "7. FEES, PAYMENTS, AND REFUNDS",
      descr: `
			7.1. Any transactions executed through your Web3 wallet, including purchasing DUCK tokens, require the payment of network transaction fees («Gas Fees»). These fees are strictly determined by the underlying blockchain network, are paid directly to network validators, and are not collected by us. We are not responsible for any failed transactions caused by insufficient Gas Fees or network congestion.
<br><br>
7.2. All purchases of DUCK tokens made through the Smart Contracts are final and strictly non-refundable. Due to the immutable and decentralized nature of the blockchain, we cannot reverse, cancel, or refund any transactions under any circumstances. By participating in the presale, you expressly waive any right to claim a refund, chargeback, or compensation.
<br><br>
7.3. You are solely responsible for determining what, if any, taxes apply to your purchase, holding, or potential future sale of DUCK tokens, and for reporting and remitting the correct taxes to the appropriate tax authorities. We do not provide tax, legal, or accounting advice. You acknowledge that purchasing digital assets may be considered a taxable event in your jurisdiction.

			`,
    },
    {
      title: "8. INTELLECTUAL PROPERTY AND COMMUNITY CONTENT",
      descr: `
			8.1. The Site and all related content, including the DUCK mascot, branding, text, graphics, logos, interfaces, and software, are the exclusive property of the decentralized Duck team or our licensors and are protected by copyright, trademark, and other intellectual property laws.
<br><br>
8.2. Subject to your strict compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to access and use the Services solely for your personal, non-commercial interaction with the presale.
<br><br>
8.3. We actively encourage the creation of community-generated content. Notwithstanding Section 8.1, we grant you a limited, revocable, non-exclusive, royalty-free license to use the DUCK mascot, name, and related graphics strictly for the purpose of creating and sharing non-commercial, community-driven promotional content (e.g., memes, fan art, social media posts). However, you may not use our intellectual property to (i) create derivative tokens or unauthorized NFT collections, (ii) deceive other users (e.g., impersonating official Duck channels), or (iii) promote malicious, hateful, or illegal content. We reserve the right to revoke this community license from any user at our sole discretion.
<br><br>
8.4. If you provide us with any feedback, ideas, memes, or suggestions regarding the Services or the token, you grant us a perpetual, irrevocable, worldwide, royalty-free license to use, reproduce, modify, and distribute such feedback and community content for any purpose (including marketing) without compensation or attribution to you.

			`,
    },
    {
      title: "9. THIRD-PARTY SERVICES AND LINKS",
      descr: `
			9.1. The Services may contain links to third-party websites or integrate third-party services. We do not control, endorse, or assume responsibility for any third-party content or services. Your use of such services is governed by their respective terms and privacy policies.

			`,
    },
    {
      title: "10. DISCLAIMERS AND NO WARRANTIES",
      descr: `
			10.1. THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
<br><br>
10.2. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
<br><br>
10.3. YOU ACKNOWLEDGE THAT THE SMART CONTRACTS AND SITE MAY BE IN BETA FORM AND MAY CONTAIN BUGS, ERRORS, OR VULNERABILITIES. YOU ACCEPT THE RISK OF SOFTWARE FAILURE AND DATA LOSS.
<br><br>
10.4. THE INFORMATION PROVIDED ON THE SITE DOES NOT CONSTITUTE INVESTMENT ADVICE, FINANCIAL ADVICE, TRADING ADVICE, OR ANY OTHER SORT OF ADVICE. YOU SHOULD NOT TREAT ANY OF THE SITE'S CONTENT AS SUCH. WE DO NOT RECOMMEND THAT ANY CRYPTOASSET SHOULD BE BOUGHT, SOLD, OR HELD BY YOU.

			`,
    },
    {
      title: "11. LIMITATION OF LIABILITY",
      descr: `
			11.1. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL WE, OUR AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES. NOTWITHSTANDING THE FOREGOING, OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR ACCESS TO OR USE OF THE SERVICES SHALL NOT EXCEED THE GREATER OF (A) THE AMOUNT OF FEES PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE DATE OF THE CLAIM, OR (B) ONE HUNDRED US DOLLARS ($100.00).
<br><br>
11.2. We assume no liability for:
<br><br>
11.2.1. errors, mistakes, or inaccuracies of content;
<br><br>
11.2.2. property damage resulting from your access to the Services;
<br><br>
11.2.3. any unauthorized access to our servers;
<br><br>
11.2.4. any interruption or cessation of transmission to or from the Services;
<br><br>
11.2.5. any bugs, viruses transmitted by third parties;
<br><br>
11.2.6. settlement finality: Losses incurred due to chain re-organizations (reorgs) or lack of finality on the destination blockchain.

			`,
    },
    {
      title: "12. INDEMNIFICATION",
      descr: `
12.1. You agree to defend, indemnify, and hold harmless us and our affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, and expenses (including but not limited to attorney's fees) arising from:
<br><br>
12.1.1. your use of and access to the Services;
<br><br>
12.1.2. your violation of any term of these Terms;
<br><br>
12.1.3. your violation of any third-party right, including copyright, property, or privacy right;
<br><br>
12.1.4. your violation of any applicable law or regulation.


			`,
    },
    {
      title: "13. DISPUTE RESOLUTION AND ARBITRATION",
      descr: `
			13.1. These Terms and any dispute or claim arising out of or in connection with them or their subject matter (including non-contractual disputes) shall be governed by and construed in accordance with the laws of Singapore.
<br><br>
13.2. Before filing a claim, you agree to try to resolve the dispute informally by contacting us and providing a written notice of your claim. We will attempt to resolve the dispute within thirty (30) days.
<br><br>
13.3. If the dispute is not resolved informally, it shall be finally settled by binding arbitration administered by the Singapore International Arbitration Centre (SIAC) under its Rules, which are deemed to be incorporated by reference into this clause.
<br><br>
13.3.1. Number of arbitrators: one;
<br><br>
13.3.2. Legal place, of arbitration: Singapore;
<br><br>
13.3.3. Language: English.
<br><br>
13.4. YOU AND WE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.

			`,
    },
    {
      title: "14. TERM AND TERMINATION",
      descr: `
			14.1. These Terms shall remain in full force and effect while you use the Services.
<br><br>
14.2. We reserve the right to suspend or terminate your access to the Services regarding your specific wallet address or IP address at any time, for any reason, at our sole discretion, without prior notice or liability, including but not limited to:
<br><br>
14.2.1. breaches or violations of these Terms or strict policies (including the Prohibited Jurisdictions and Prohibited Acts clauses);
<br><br>
14.2.2. requests by law enforcement or other government agencies;
<br><br>
14.2.3. discontinuance or material modification to the Services;
<br><br>
14.2.4. unexpected technical or security issues or problems.
<br><br>
14.3. Upon termination, your right to use the Services will immediately cease. Since the Smart Contracts are non-custodial, we cannot seize your assets, but we can restrict your interaction with our Site. Sections 5, 8, 10, 11, 12, and 13 shall survive any termination of these Terms.
<br><br>
			`,
    },
    {
      title: "15. PERSONAL INFORMATION",
      descr: `
15.1. Your submission of personal information through the Services is governed by our Privacy Policy, which is incorporated herein by reference.
<br><br>
15.2. You acknowledge that while the Smart Contracts are non-custodial, we collect and process data as described in the Privacy Policy, including but not limited to:
<br><br>
15.2.1. Information automatically collected, such as IP addresses, device identifiers, wallet addresses, and transaction history;
<br><br>
15.2.2. Personal data you allow us to access or provide directly to us (e.g., via contact forms or support emails), which may include your name, email address, and social media details.
<br><br>
15.3. We use this information to operate and improve the Services, ensure compliance with regulatory obligations, prevent illicit activity, and for marketing or communication purposes as detailed in the Privacy Policy.
<br><br>
15.4. By using the Services, you explicitly consent to such collection, processing, and storage of your data. You represent that you have read and understood the Privacy Policy.

			`,
    },
    {
      title: "16. MISCELLANEOUS",
      descr: `
			16.1. If any provision of these Terms is found to be invalid or unenforceable, that provision will be enforced to the maximum extent permissible, and the other provisions of these Terms will remain in full force and effect.
<br><br>
16.2. These Terms constitute the entire agreement between you and us regarding the Services and supersede all prior written or oral agreements.
<br><br>
16.3. You may not assign or transfer these Terms without our prior written consent. We may assign or transfer these Terms without restriction.
<br><br>
16.4. You consent to receive electronic communications from us (e.g., via email, X/Twitter, or by posting notices on the Services). You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including that such communications be in writing.

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
