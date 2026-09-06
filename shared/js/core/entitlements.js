/**
 * shared/js/core/entitlements.js
 * Centralized, decentralized, privacy-sovereign access control and entitlements system.
 */
(function() {
    'use strict';

    window.COSY = window.COSY || {};

    const WONDER_DRAFT_MAPPING = {
        'whether-raindrops-select-where-to-fall.html': 1,
        'do-insects-hide-when-it-rains.html': 2,
        'is-bad-weather-gods-anger.html': 3,
        'always-watched-in-a-crowd.html': 4,
        'why-is-everyone-copying-me.html': 5,
        'feeling-empty-after-series.html': 6,
        'death-of-the-album.html': 7,
        'ugly-produce-anti-waste.html': 8,
        'does-euthanasia-reduce-suicide-rates.html': 9,
        'appreciating-amy-winehouse-after-death.html': 10,
        'why-do-we-try-to-relate-to-adhd.html': 11,
        'is-parenting-instinct-a-real-thing-or-scam.html': 12,
        'are-traditions-hidden-monogamy.html': 13,
        'collective-guilt-global-crisis.html': 14,
        'are-traditions-hidden-monogamy-upper-intermediate.html': 15,
        'i-have-no-time-for-it.html': 16,
        'why-do-i-spend-more-when-i-earn-more.html': 17,
        'does-inclusive-language-make-us-equal.html': 18,
        'we-are-people-we-are-not-stupid-animals.html': 23
    };

    const KUS_SPECIMEN_MAPPING = {
        'ai-and-the-brain-intermediate.html': 'KUS01',
        'ai-and-the-brain-upper-intermediate.html': 'KUS01',
        'ai-reality-delusion.html': 'KUS02',
        'animal-cooperation-language-intermediate.html': 'KUS03',
        'animal-cooperation-language-upper-intermediate.html': 'KUS03',
        'ape-laughter-speech-origin-elementary.html': 'KUS04',
        'ape-laughter-speech-origin-intermediate.html': 'KUS04',
        'brain-improving-in-90s-intermediate.html': 'KUS05',
        'brain-improving-in-90s-upper-intermediate.html': 'KUS05',
        'childhood-obesity-theory-elementary.html': 'KUS06',
        'childhood-obesity-theory-intermediate.html': 'KUS06',
        'climate-scientist-warming-report-intermediate.html': 'KUS07',
        'climate-scientist-warming-report-upper-intermediate.html': 'KUS07',
        'football-beats-shamrock-intermediate.html': 'KUS08',
        'football-beats-shamrock-upper-intermediate.html': 'KUS08',
        'fusion-energy.html': 'KUS09',
        'grandmother-evolutionary-mystery.html': 'KUS10',
        'grandparents-mental-health.html': 'KUS11',
        'gut-brain-memory-intermediate.html': 'KUS12',
        'hidden-regenerative-powers-intermediate.html': 'KUS13',
        'hidden-regenerative-powers-upper-intermediate.html': 'KUS13',
        'impersonation-accounts.html': 'KUS22',
        'inside-the-backrooms-elementary.html': 'KUS23',
        'inside-the-backrooms-intermediate.html': 'KUS23',
        'living-most-creative-time.html': 'KUS24',
        'losing-spoken-words.html': 'KUS24',
        'mendelian-laws-broken.html': 'KUS24',
        'museums-movies-theater-stay-younger-elementary.html': 'KUS24',
        'museums-movies-theater-stay-younger-intermediate.html': 'KUS24',
        'museums-movies-theater-stay-younger-upper-intermediate.html': 'KUS24',
        'ozempic-obesity-revolution-intermediate.html': 'KUS06',
        'ozempic-obesity-revolution-upper-intermediate.html': 'KUS06',
        'recycling-distraction-test-intermediate.html': 'KUS13',
        'right-handedness.html': 'KUS22',
        'sensory-system-pain-disease-intermediate.html': 'KUS23',
        'sensory-system-pain-disease-upper-intermediate.html': 'KUS23',
        'social-decisions-brain.html': 'KUS24',
        'spider-creatures-origins-of-fatherhood-intermediate.html': 'KUS25',
        'spider-creatures-origins-of-fatherhood-upper-intermediate.html': 'KUS25',
        'tv-midlife-shrink-brain-intermediate.html': 'KUS26',
        'vliyanie-propagandy-deti.html': 'KUS27',
        'where-you-live-shapes-dementia-risk-elementary.html': 'KUS28',
        'where-you-live-shapes-dementia-risk-intermediate.html': 'KUS28',
        'where-you-live-shapes-dementia-risk-upper-intermediate.html': 'KUS28',
        'your-fingers-hold-secret-brain-evolution-intermediate.html': 'KUS29',
        'your-fingers-hold-secret-brain-evolution-upper-intermediate.html': 'KUS29'
    };

    const HASH_DB = {
        "01": { mini: "9a55843dbd3ac44de18c4c06127c66e3bc5f71d4bc220d36d6031c0ea58be3ca", private: "350968618eb272b7da956f6c939a0693b232f40f294b5ac3c58874b94790d483" },
        "02": { mini: "23f34cd9b126f8ecfaab4be1956e081f999393bc7be0c487eaa12e19bda6bc8a", private: "b44e1cdb1d811028b4ac63bda58c743de1033688c24459477a80bc27d70e7696" },
        "03": { mini: "dd8fe4f439331298efd841c6a49eab40ced1c3dbde170894c01d199bb03818f4", private: "133e06b1579f59b392aa84ca4787007768bc10ad81cb5c122e7e760ad318305b" },
        "04": { mini: "36ef094792eef67ddcb13a7b9a7f51b90dc639a1cc13791b8b7da9ca25229cba", private: "1ddcbc997f25739b97b8a05d61659f1c4af66224b7eaed16211eba3c71e65bea" },
        "05": { mini: "bc4fc4b5c33579c3d65967e835131df3e4614c0a70ff8c20b8877e92c4b76729", private: "86c2aa4553dd42ec7193a741876f73391c14394c9cb55817cdbab719bf9874b1" },
        "06": { mini: "eccfae1cfd10a6e7dd7a3cb09190f55756919d2b6282442dd74a2370fad66541", private: "c07655eefc0674b977a03853a8bb9f945673527289829ee4af70908bf074e8cd" },
        "07": { mini: "28dc0ca126d5a532ddb25b33f3698da7ecda36b2ddd82dc4d4615613a1279aae", private: "642ec6ded77bdc88608c3cfa5529b4f4bdfc04a57264a254150b5c72033999c0" },
        "08": { mini: "7fa67064f6d7974a3fc26d845f40d5ea02017ea213a5e80d25461bb0eec57df3", private: "f626ab27fa83d4b194c104d33e3434ddb28907eac23376d457d7b16e76f3a88a" },
        "09": { mini: "70f1b45536fea3d7bf66440979d47964ab393f498122e071a7dec300bc34ef2b", private: "5cc29f40e01ae7ec4d2b45ad8490056f3bf3dbf0eca51a4efe376573229821ad" },
        "10": { mini: "c4dffa1d04040be9ae284f8df2ab133ca1d2142a1ea38958eca7a94f5ecd47ed", private: "b607724d7484d5460ec3e7b07bd18315ec37d3ddb863745f87bed8d506ebf981" },
        "11": { mini: "c4a4ec14e86917ed7b08de3f11408a7c4dcfcf081e62568a00434516a4181c1e", private: "fa3bde056e4c399d4ebe19019e24aa451251ba5fd5227a374150a41c35b28b09" },
        "12": { mini: "c8b0247de55e8a1675a1f235e8d7a533df7d1fe71de9b2916d1fad73c1f50f2c", private: "55f05165e1017032352916debe23fb849aac4212a2f5ded216c14d2121700b6c" },
        "13": { mini: "45b71596f8643c5995c3da0daffa7a71b421605072b8408af007ba8f517c76f7", private: "dfa4f8930c64d6ced1ff892827f90010782c450f4ff0019a89e768017ba7958e" },
        "14": { mini: "757f0909fe73da2ba33676fe18f591f7ddc21cfc76b717c66388ea32207954d3", private: "2f1496e3b501e37ec74ef842059bb7157c282aba397ddc8d10221c179eb589c0" },
        "15": { mini: "cf088ad33c0450ed88e0366891f09dcff25d72d5d4b1a5c8905f201b37be2da1", private: "201e91675b373937920c2ff4b6362b397ffebb6dd77055d8e28c70c7b5f34fa0" },
        "16": { mini: "95fb8b5a8c8ea55cdd731fe59edd60eeb78b8aaddf8d35d32cace5ee639396ed", private: "07a398c5fa73a37f695c62a0ab3266de83f4f7c1101fcce7cfbd19d404c1688e" },
        "17": { mini: "0904bbb67537502bfa28916f31d1dd48623243b25196389d135862b43650b6bf", private: "3de7453a7e660f0c6fc25ba69212602cc307bc5ea35f5cfd8af53c2e970b6d54" },
        "18": { mini: "d8cf680cdca05c30d29c1ca8edbf713b636187bb6e3eebc4f587597707bce99e", private: "be78f18abd4ca75abd2d40f7028ae5d56185e8916bc5014acc62b05cd1d1b78a" },

        // Keeping Up With Science hashes
        "KUS01": { mini: "cb0948c0c4ff19e101816839de80c5fd9b8ea2b203c1ea90b844dc4429a68fdf", private: "7100a53ae91d70733485de8f501528cb188e6b084f39b641aabd1011dc54e1d8" },
        "KUS02": { mini: "512a10ebf279bc17a68ad62ba7b200b73fed69290541ad7f73e597c83e097048", private: "9f20be2d85a851bba1d5dd84cbc7389e3daa43c844a1f995f947be66847ae131" },
        "KUS03": { mini: "e66b2ab0e976b91e1e9f50faa1de10ff0c060065a3ea8090aeca2a7095ae8fe0", private: "1607dda511b1ffd5a810c3da06b08743ac9527ffd8bd2643e13603e79decca15" },
        "KUS04": { mini: "84557529b8079136b76360f54381117a80e1cbd978d5502686a993551ef9bb22", private: "b00b234fef13f764c116a1aab8da5f37ac150f70a6fedd873338b58047c97a94" },
        "KUS05": { mini: "915136561ac5efee89f82441b2eecdb301cb066a6ce6c4e07a4644b56a43e8b7", private: "da67c2e7171fb0396c3f6e4d413d22eb508f026c6bb905158f751f0518853522" },
        "KUS06": { mini: "24913216711d5995a3066f7b254baa90f08a212fd01af914cd03eb774e47d000", private: "0e1d706acec80cb8d1d796001b0683ff8d2aca6d40e1c6f93f6a3aaa6168e313" },
        "KUS07": { mini: "e1190a79deff66260e0584864e56d75e1cf212f90cc1e097ea78b5f3dec12ec9", private: "8ea479d10c8ecfa3b9aec9de911ba5dad3e203b59d7b3d339453f677a8399eec" },
        "KUS08": { mini: "b7faf1ad1f36639d27080bd6c2ec3b551904e1ccaa8d5b9e41bc8da1fc4a1ba3", private: "75836510885fa487be0663d2007c1b41c6ec25cd19b69c2dc24dc5d134262882" },
        "KUS09": { mini: "4bee1b4b4e058da622f57fc6b07caea03e6b16ec7a9846484945c2a0bed4ed73", private: "65822659bf8ceb1ad98fc41aabf9a4ea9755b9af50d28ee11e003ece0f3c19ac" },
        "KUS10": { mini: "1286c91aadb4a43dcd64a211728841716b3867242aee7b0aeffbafe56efdb087", private: "cf30f4dc1b0678c4f60414ec909353f898f5f9443d9914074842616a01830c30" },
        "KUS11": { mini: "3905a443a7f7eb759c5d81b190ee3d08214c3148d6e78053263300d6bc9f4b31", private: "01102d24c05cf776e8fa2643c72a8c820c6f5e6858f539d79e43caf99a509106" },
        "KUS12": { mini: "240404378dd56c04c002404bc172be3b57a4b2745dd1738a6d92ce3b56c6a79d", private: "4bac56e676284f6ce9bb6839349c5e513f94cb36ccdc21d76d05255d17ee5227" },
        "KUS13": { mini: "82071054e47b1c6facae642018b4d08c5940990c263bd72a0eb77f009ec17bbd", private: "9f0335b57daa5b023dbab99b8e24512cd26ba683b0843f469d153857747b9baf" },
        "KUS14": { mini: "51fd4bc9e89042f1cd5af8c68689d3f20fecdfa4f0223dd94e58babb915bfe6f", private: "d6a146a7ff9bb669703e70739e27f27b1d845341601ec9f08b8d2b14b8a43315" },
        "KUS15": { mini: "7da7163a87af117efadba0dc5455de00ce2627517ba19a02f84757b8d6bc5c20", private: "b2301b9ae4d7965a8ca31cd608b05f2fe0573e5ed1538d2d608bbd6b1a2c45f1" },
        "KUS16": { mini: "f4710230d9a3153356cb61ad4ee0aaf3eb0e21473b6508e027ccf68ef9e74329", private: "51f8b17bca241feba44dea062c0b7f188718f607d2bc33f0aa4197e4a716ce65" },
        "KUS17": { mini: "f56bd14041f078f5d75c7384a5ac5b26634bb6d94e4c865cf0d34c0d76f75752", private: "d5ea11d61f5184e744ada52be777917f653bc35c05d5f5bd76cf493bd6c3a843" },
        "KUS18": { mini: "efac0ab8f48e67442cd3456574d202ce22d20ad5f7338cfbe7d9c5e7074ad50a", private: "54ba57671349b426668063ea5590d0b476a59eff3343c5a6aaa97d90cea98bd9" },
        "KUS19": { mini: "4eb3d02df061e95c1059d91845b846d7f410a9bb5145e04c6cacdddc1e7b78b3", private: "ad9b639e6ba427086f32a1136d5f938d4deb5bb541f1bfded491ab4fa6276ec4" },
        "KUS20": { mini: "30bda311bb35833c5f7c9c8a45bf63345ab330ab3ef40d87d6b5a0b590d856d4", private: "c5bf4a7f28eb22248fc452546ecf52853cd5f86253e4f56bc80a15a9a2e37a59" },
        "KUS21": { mini: "61ab175e404acc1cff6d915943bb1686b1318deee25d8f60a14f774b8f4021da", private: "05bbd8e00e2a1f59c81a8d8835e7c57704fb2238c83c9a87cf48f1449ee6f4ba" },
        "KUS22": { mini: "51fd4bc9e89042f1cd5af8c68689d3f20fecdfa4f0223dd94e58babb915bfe6f", private: "d6a146a7ff9bb669703e70739e27f27b1d845341601ec9f08b8d2b14b8a43315" },
        "KUS23": { mini: "ccf529afff980a98f52b747e8eb2f02565325720f5cb9c4ab1d03709bb1a68ac", private: "286aedc04586fe50d255b879ba9c75f020ca6e2dc4b8938f8a4f85497f5b2d19" },
        "KUS24": { mini: "8c779e8d374f44e960f2a621bb82014f5654b60875507a284d97effce3650f3b", private: "421e8e5643a72669a30df5ee22408f2b181f45be223c9d3aafacef1afe75f085" },
        "KUS25": { mini: "27d007ef645def65136abe715b8c5335374a6757bb25eba95f0e741f7c721050", private: "47a84ccd72046322639ff1d1daff89127158cbc39ca36f15f5cf3a12ec459850" },
        "KUS26": { mini: "178062f595f5a62cb0fff9e9b3fea8851ca62723f132f30194097a8e988be5b5", private: "75ce02d910f46623544b19acb67c9f2818a3e9771fea543231d6193439e91009" },
        "KUS27": { mini: "297a3b9861261f298556c0837f74189b668fad3e027193b007388044bb4f305a", private: "8522d717782a2b7f8aa8b46cf279016bd34d31d23dc378861237a4173f0464e6" },
        "KUS28": { mini: "bdf5a93b1811f24791f9508cbadc78d092d3302a180be33b12aca6914e571519", private: "ed374e4dcf5630a6a0b183f21d315b7c5b32c6a0b6c1a44dddef2d2cb407edb4" },
        "KUS29": { mini: "a015ac05acecf31dfdd631c0c0122aa1b6c4b2560bcc893dcf57ddf2d516c1be", private: "fdfff92419f5c4ca40c28b6c5bb635b9461acde2ab20b715c3770ffc5de7a15d" }
    };

    window.COSY.entitlements = {
        getCurrentDraftKey() {
            const path = window.location.pathname;
            const filename = path.split('/').pop();
            const draftNum = WONDER_DRAFT_MAPPING[filename];
            if (draftNum) {
                return String(draftNum).padStart(2, '0');
            }
            return null;
        },

        getCurrentKusKey() {
            const path = window.location.pathname;
            const filename = path.split('/').pop();
            return KUS_SPECIMEN_MAPPING[filename] || null;
        },

        /**
         * Checks whether access is granted for a given product, sub-product, and tier.
         * Falls back to check legacy storage keys for perfect backward compatibility.
         */
        check(productKey, subKey, tier) {
            const params = new URLSearchParams(window.location.search);
            if (params.get('shared') === 'true') {
                return true;
            }

            const pKey = (productKey || '').toUpperCase();
            const sKey = (subKey || '').toUpperCase();
            const tKey = (tier || '').toUpperCase();

            // Namespaced key
            const namespacedKey = `COSY-${pKey}-${sKey}-${tKey}`;
            if (sessionStorage.getItem(namespacedKey) === "true" || localStorage.getItem(namespacedKey) === "true") {
                return true;
            }

            // Legacy key fallbacks
            if (pKey === 'EVENTS' && sKey.startsWith('WONDER-')) {
                const draftKey = sKey.replace('WONDER-', '');
                const legacyKey = `cosy_wonder_auth_draft_${draftKey}_${tKey.toLowerCase()}`;
                if (sessionStorage.getItem(legacyKey) === "true") return true;
            } else if (pKey === 'EVENTS' && sKey.startsWith('SCIENCE-')) {
                const kusKey = sKey.replace('SCIENCE-', '');
                const legacyKey = `cosy_science_auth_${kusKey}_${tKey.toLowerCase()}`;
                if (sessionStorage.getItem(legacyKey) === "true") return true;
            }

            return false;
        },

        /**
         * Computes SHA-256 hash of a string.
         */
        async sha256(str) {
            const encoder = new TextEncoder();
            const data = encoder.encode(str);
            const hashBuffer = await crypto.subtle.digest('SHA-256', data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        },

        /**
         * Unlocks a code, parsing and validating it locally using client-side pre-computed SHA-256 database.
         * If a specific session/draft page is active, enforces that the passcode matches this specific session.
         */
        async unlock(rawCode) {
            let normalizedInput = (rawCode || '').trim().toUpperCase();
            // Normalize single digit inputs
            normalizedInput = normalizedInput.replace(/^(ICHBWMG|ICHBWPL|KUSMG|KUSPL)([1-9])$/, '$10$2');

            const currentDraft = this.getCurrentDraftKey();
            const currentKus = this.getCurrentKusKey();

            // 1. Check Wonder Club Mini Group / Private Lesson codes
            const wonderMatch = normalizedInput.match(/^(ICHBWMG|ICHBWPL)(\d{2})$/);
            if (wonderMatch) {
                const prefix = wonderMatch[1];
                const draftKey = wonderMatch[2];
                const tier = prefix === 'ICHBWMG' ? 'mini' : 'private';

                // Enforce context match if currentDraft is present
                if (currentDraft && currentDraft !== draftKey) {
                    console.warn(`[Entitlements] Passcode draft mismatch: entered ${draftKey}, current is ${currentDraft}`);
                    return false;
                }

                const targetHash = HASH_DB[draftKey]?.[tier];
                if (targetHash) {
                    const computedHash = await this.sha256(normalizedInput);
                    if (computedHash === targetHash) {
                        const namespacedKey = `COSY-EVENTS-WONDER-${draftKey}-${tier.toUpperCase()}`;
                        sessionStorage.setItem(namespacedKey, "true");

                        // Legacy fallback storage write
                        const legacyKey = `cosy_wonder_auth_draft_${draftKey}_${tier}`;
                        sessionStorage.setItem(legacyKey, "true");
                        return true;
                    }
                }
            }

            // 2. Check Science Club Mini Group / Private Lesson codes
            const scienceMatch = normalizedInput.match(/^(KUSMG|KUSPL)(\d{2})$/);
            if (scienceMatch) {
                const prefix = scienceMatch[1];
                const digits = scienceMatch[2];
                const kusKey = `KUS${digits}`;
                const tier = prefix === 'KUSMG' ? 'mini' : 'private';

                // Enforce context match if currentKus is present
                if (currentKus && currentKus !== kusKey) {
                    console.warn(`[Entitlements] Passcode specimen mismatch: entered ${kusKey}, current is ${currentKus}`);
                    return false;
                }

                const targetHash = HASH_DB[kusKey]?.[tier];
                if (targetHash) {
                    const computedHash = await this.sha256(normalizedInput);
                    if (computedHash === targetHash) {
                        const namespacedKey = `COSY-EVENTS-SCIENCE-${kusKey}-${tier.toUpperCase()}`;
                        sessionStorage.setItem(namespacedKey, "true");

                        // Legacy fallback storage write
                        const legacyKey = `cosy_science_auth_${kusKey}_${tier}`;
                        sessionStorage.setItem(legacyKey, "true");
                        return true;
                    }
                }
            }

            // 3. Prevent direct bypass of namespaced codes
            if (normalizedInput.startsWith("COSY-")) {
                console.warn("[Entitlements] Direct bypass block of system strings rejected.");
                return false;
            }

            return false;
        },

        /**
         * Mints a query string parameter for Teacher / Host sharing.
         */
        mintShareLink(productKey, subKey) {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.set('shared', 'true');
            return currentUrl.toString();
        }
    };
})();
