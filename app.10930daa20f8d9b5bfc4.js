(function (e) {
    function t(t) {
        for (var n, i, c = t[0], r = t[1], u = t[2], d = 0, l = []; d < c.length; d++)
            i = c[d], Object.prototype.hasOwnProperty.call(s, i) && s[i] && l.push(s[i][0]), s[i] = 0;
        for (n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        f && f(t);
        while (l.length)
            l.shift()();
        return o.push.apply(o, u || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], n = !0, i = 1; i < a.length; i++) {
                var c = a[i];
                0 !== s[c] && (n = !1)
            }
            n && (o.splice(t--, 1), e = r(r.s = a[0]))
        }
        return e
    }
    var n = {},
    i = {
        app: 0
    },
    s = {
        app: 0
    },
    o = [];
    function c(e) {
        return r.p + "static/js/" + e + "." + {
            "chunk-09d2ba7e": "e786ea28d745577c2fd3",
            "chunk-267e8b83": "66cf3a240756cbaa71e0",
            "chunk-2c9cbf7d": "8a4d55951f45dc358650",
            "chunk-2d229604": "0d1555b2c615417ef147",
            "chunk-3c96c280": "e27463f9a6a106dd5bb3",
            "chunk-42d3cef2": "edb8d5a01e7e80522541",
            "chunk-448e8dc0": "c62d7d7869c60b48e93d",
            "chunk-499c8c9e": "e7cd553810b9ebb4a467",
            "chunk-4d37badf": "0ccc860053f66c9e87b4",
            "chunk-51041bd2": "49679d2ba3cbd08aaf0a",
            "chunk-5a176030": "9fd856813f31dadc885b",
            "chunk-7439b4d6": "dc1f8b859f6d23b2a3b3",
            "chunk-7b2d3c6c": "7879d023946e19a853bc",
            "chunk-90b62210": "c1ba1fc59dd146299d95",
            "chunk-917a1616": "4cc17a51cd7ca154cb01",
            "chunk-a6387a5a": "2d3379a242a2ede364f6",
            "chunk-c49a4b74": "0531e05d9ac11cf54316",
            "chunk-03c1e51b": "85213b8f9154bad3c51a",
            "chunk-0a0940d2": "d81960c95dbae7377da4",
            "chunk-0f5c621f": "c3777bf24e1e888d538a",
            "chunk-1610edc9": "a60ece75fb9fce3d438f",
            "chunk-1865ea2a": "a07a3b5570c1507504ae",
            "chunk-1ad4b1ee": "26582cb036adec2664f9",
            "chunk-1f7f9f18": "9c90f15566ff542506fc",
            "chunk-25102708": "2f23539f53c50ee56928",
            "chunk-6b05f859": "bc7f63ca0e56f4e23d48",
            "chunk-28b5551d": "1633d766f17f76086e9f",
            "chunk-2b9bd79e": "325359ede0efc377be0d",
            "chunk-2d0b6e7a": "2cc9ad3f166840d6776d",
            "chunk-2d0b95da": "a882a5c033a68d5577c7",
            "chunk-2d182ed7": "7a761b69f7834b4d636a",
            "chunk-2f2ca2ce": "da3ff919364399d1b145",
            "chunk-31725419": "6a8c352454747c4e7643",
            "chunk-31df845a": "a4a5ecdd3b689bee64bd",
            "chunk-36210c95": "829eda243caf10691f3b",
            "chunk-394a284a": "bf541c35e3e8017afbf5",
            "chunk-3a7e2760": "c921d247b91d0bc25369",
            "chunk-3b1ce5d8": "a35b711bc7a26dbfc717",
            "chunk-3d9d0e28": "25783ad4f7fe3dea2473",
            "chunk-3ec117f6": "713aace5096b152c4c06",
            "chunk-43a507d9": "0828131c53d2f5ca439b",
            "chunk-449328d6": "728ef1e204f749cd61b9",
            "chunk-46c92a3d": "603284ffda7d4452306a",
            "chunk-47a04560": "39e211f9eac51222fcf1",
            "chunk-4888bb2e": "e24573f3bb11e56e946f",
            "chunk-4a6d8cf0": "64b0467e83097f2ea5c0",
            "chunk-4e3e4f21": "426a0435c08451dcc22f",
            "chunk-4ec92e32": "02dac4cf09ef54358e2a",
            "chunk-4fe55158": "b5f411fb8d497b3cb052",
            "chunk-520a8c66": "c51dc44fbde0d93ada6e",
            "chunk-53b2b972": "7c9f020f929e9606a9f8",
            "chunk-57e3cc40": "ea36b7c4ba031bba0f86",
            "chunk-57e6a106": "427fd56586814c94b95a",
            "chunk-582f4b2a": "973b5e4552debac7f787",
            "chunk-58f1df36": "9e91f718587176d484dd",
            "chunk-5912e734": "c499d1852d11e2936031",
            "chunk-59b7ffc8": "30d0ca8d64c8d438db0f",
            "chunk-5c8a8beb": "06d5beb6cd84f893f33f",
            "chunk-5d2111d6": "f4da45d14344b401ba1b",
            "chunk-6de5407c": "e1d19aa764d5cc934585",
            "chunk-71985e58": "023a28bf3d4f96e7b334",
            "chunk-73d0c6bf": "33ff81989aca79505abb",
            "chunk-751b3925": "92eb8747a3243e2c5abb",
            "chunk-7575032e": "de2e938ad07af0e37b5d",
            "chunk-773bef97": "d43cae6f2e22c3035a1b",
            "chunk-72e7daef": "98ddaa4af1939cc9ddd3",
            "chunk-a3f7ba9c": "fc7040429b232a5392ce",
            "chunk-785926d5": "c23692d3789da1801385",
            "chunk-795a3056": "7920e8d4381553705b26",
            "chunk-7ee05792": "5ad2bdf24002b5d960ef",
            "chunk-7f923980": "17445c62cb8efba88c06",
            "chunk-7faeb13b": "6ae7382f6ab9e98b8a31",
            "chunk-82f932e8": "e4e222132217b07c8c05",
            "chunk-85f1646a": "2e53a520053220c917d3",
            "chunk-86cd8e92": "5b6b98234b625b62a326",
            "chunk-89c8313e": "3033ff5679474d4e2679",
            "chunk-89ce40fe": "ad264a5558b5f5fbd2b1",
            "chunk-8f890bf8": "8581691865d96bfb6ed7",
            "chunk-9c8a29d2": "bf569337111ab5dddb8c",
            "chunk-a36a538e": "081ceff62f065525533d",
            "chunk-aa1532c0": "954587fbc18847284604",
            "chunk-ac762624": "91eaf794ff6ed85d4c37",
            "chunk-b45af54e": "411701e5ee10f35fa9ce",
            "chunk-bed30930": "e96975b4eb5b217a8d9d",
            "chunk-cc8775f0": "32f623b6f821677b11f9",
            "chunk-cd91c9d4": "a33404a90c91f5265fe5",
            "chunk-d101f7ee": "407caf37b60d87d03aa3",
            "chunk-d2260cfa": "d8c62e492fedb90a2759",
            "chunk-d7b55714": "b0ab5497e32e7746fb9b",
            "chunk-d89427e4": "96ca2b2c721d6c392fbf",
            "chunk-dde75352": "1b9a4f3139adf6b2cfc7",
            "chunk-e9f20a10": "14e63e0d110dec7b9d0c",
            "chunk-388c8778": "cc303e4872123d877a32",
            "chunk-483ecc60": "c72c777839cd2e060730",
            "chunk-5b9ea7b2": "8030abb354071a87199f",
            "chunk-b8515eb0": "8c9c9899ad59f7699bb4",
            "chunk-f47f9924": "4a4fe0051be9ea8e52f4",
            "chunk-f48fd4fa": "b3f96adb269b1d8e009f",
            "chunk-f532982c": "56ff3a20c2fda229f8ef",
            "chunk-fecb1c96": "e8433c568476085446f4",
            "chunk-f7bf2820": "ca4d1b49f73e6760a692",
            "chunk-0d5bff33": "8dc1f23a073f5ef9f0cf",
            "chunk-132ac30a": "0528517dd3e26ee220dc",
            "chunk-19d4b719": "f6b3066dfcbf5ae96d2e",
            "chunk-222c0c97": "496fede8d24e06fc5bb1",
            "chunk-25d5d63f": "e997b3d5ca7cde00601b",
            "chunk-3602d3fe": "e350c3acb7cd82194eaa",
            "chunk-3e064585": "458f8f86fb0e2d3a625b",
            "chunk-42132f94": "a69bb7d777fc49538db0",
            "chunk-59d2d191": "fc1b4fd0c1bd79c7ceaf",
            "chunk-7361def8": "d81dfdbe3ab319116f05",
            "chunk-77a4fa48": "8ecb398eabf0cadde37d",
            "chunk-9380fdd4": "2a49e2e861a459fbdbf7",
            "chunk-ba45a5a2": "ad562d212af67a766343",
            "chunk-d1800290": "43f6ac789063fde13758",
            "chunk-e98c2a56": "d8c6eaab3e0a74a9caa3",
            "chunk-7f4715e0": "0ec4924776832b883eed",
            "chunk-06cfb6e6": "81d52dcc04119524b94e",
            "chunk-12603dc6": "1b2d474a78f4bb953b47",
            "chunk-53c02af9": "e12aa984461f7c2b2b76",
            "chunk-9dedcf20": "b07b297abdbc2b2ce99c",
            "chunk-4565e728": "f38fb44e543e879923fb",
            "chunk-96b515b0": "4b4fa9bf1f6e7cd8f877",
            "chunk-1f1f3f5e": "c3fa5ff513e3899d5069",
            "chunk-5d4c8547": "e27d5c3867720d03b4fd",
            "chunk-cd890f08": "95479bdf52f54bbfa3d9",
            "chunk-d33ff21e": "2461efcdd02185e72daa",
            "chunk-daada084": "5cbadacf547e14160432",
            "chunk-557638a0": "59b345c6794cb713a0a6"
        }
        [e] + ".js?v=1606826045648"
    }
    function r(t) {
        if (n[t])
            return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, r),
        a.l = !0,
        a.exports
    }
    r.e = function (e) {
        var t = [],
        a = {
            "chunk-09d2ba7e": 1,
            "chunk-267e8b83": 1,
            "chunk-2c9cbf7d": 1,
            "chunk-3c96c280": 1,
            "chunk-42d3cef2": 1,
            "chunk-448e8dc0": 1,
            "chunk-499c8c9e": 1,
            "chunk-4d37badf": 1,
            "chunk-51041bd2": 1,
            "chunk-5a176030": 1,
            "chunk-7439b4d6": 1,
            "chunk-7b2d3c6c": 1,
            "chunk-90b62210": 1,
            "chunk-917a1616": 1,
            "chunk-a6387a5a": 1,
            "chunk-c49a4b74": 1,
            "chunk-03c1e51b": 1,
            "chunk-0a0940d2": 1,
            "chunk-1610edc9": 1,
            "chunk-1865ea2a": 1,
            "chunk-1ad4b1ee": 1,
            "chunk-1f7f9f18": 1,
            "chunk-6b05f859": 1,
            "chunk-28b5551d": 1,
            "chunk-2b9bd79e": 1,
            "chunk-2d182ed7": 1,
            "chunk-2f2ca2ce": 1,
            "chunk-31725419": 1,
            "chunk-31df845a": 1,
            "chunk-36210c95": 1,
            "chunk-394a284a": 1,
            "chunk-3a7e2760": 1,
            "chunk-3b1ce5d8": 1,
            "chunk-3d9d0e28": 1,
            "chunk-3ec117f6": 1,
            "chunk-43a507d9": 1,
            "chunk-449328d6": 1,
            "chunk-46c92a3d": 1,
            "chunk-47a04560": 1,
            "chunk-4888bb2e": 1,
            "chunk-4a6d8cf0": 1,
            "chunk-4e3e4f21": 1,
            "chunk-4ec92e32": 1,
            "chunk-4fe55158": 1,
            "chunk-53b2b972": 1,
            "chunk-57e3cc40": 1,
            "chunk-57e6a106": 1,
            "chunk-58f1df36": 1,
            "chunk-5912e734": 1,
            "chunk-59b7ffc8": 1,
            "chunk-5c8a8beb": 1,
            "chunk-5d2111d6": 1,
            "chunk-6de5407c": 1,
            "chunk-71985e58": 1,
            "chunk-73d0c6bf": 1,
            "chunk-751b3925": 1,
            "chunk-7575032e": 1,
            "chunk-773bef97": 1,
            "chunk-72e7daef": 1,
            "chunk-a3f7ba9c": 1,
            "chunk-785926d5": 1,
            "chunk-795a3056": 1,
            "chunk-7ee05792": 1,
            "chunk-7f923980": 1,
            "chunk-7faeb13b": 1,
            "chunk-82f932e8": 1,
            "chunk-85f1646a": 1,
            "chunk-86cd8e92": 1,
            "chunk-89c8313e": 1,
            "chunk-89ce40fe": 1,
            "chunk-8f890bf8": 1,
            "chunk-9c8a29d2": 1,
            "chunk-a36a538e": 1,
            "chunk-aa1532c0": 1,
            "chunk-ac762624": 1,
            "chunk-b45af54e": 1,
            "chunk-bed30930": 1,
            "chunk-cc8775f0": 1,
            "chunk-cd91c9d4": 1,
            "chunk-d101f7ee": 1,
            "chunk-d2260cfa": 1,
            "chunk-d7b55714": 1,
            "chunk-d89427e4": 1,
            "chunk-dde75352": 1,
            "chunk-e9f20a10": 1,
            "chunk-388c8778": 1,
            "chunk-483ecc60": 1,
            "chunk-5b9ea7b2": 1,
            "chunk-b8515eb0": 1,
            "chunk-f47f9924": 1,
            "chunk-f48fd4fa": 1,
            "chunk-f532982c": 1,
            "chunk-f7bf2820": 1,
            "chunk-0d5bff33": 1,
            "chunk-132ac30a": 1,
            "chunk-19d4b719": 1,
            "chunk-222c0c97": 1,
            "chunk-25d5d63f": 1,
            "chunk-3602d3fe": 1,
            "chunk-3e064585": 1,
            "chunk-42132f94": 1,
            "chunk-59d2d191": 1,
            "chunk-7361def8": 1,
            "chunk-77a4fa48": 1,
            "chunk-9380fdd4": 1,
            "chunk-ba45a5a2": 1,
            "chunk-d1800290": 1,
            "chunk-e98c2a56": 1,
            "chunk-7f4715e0": 1,
            "chunk-06cfb6e6": 1,
            "chunk-12603dc6": 1,
            "chunk-53c02af9": 1,
            "chunk-9dedcf20": 1,
            "chunk-4565e728": 1,
            "chunk-96b515b0": 1,
            "chunk-1f1f3f5e": 1,
            "chunk-5d4c8547": 1,
            "chunk-cd890f08": 1,
            "chunk-d33ff21e": 1,
            "chunk-daada084": 1
        };
        i[e] ? t.push(i[e]) : 0 !== i[e] && a[e] && t.push(i[e] = new Promise((function (t, a) {
                        for (var n = "static/css/" + ({}
                                    [e] || e) + "." + {
                                "chunk-09d2ba7e": "be2ddac75c2f685a2f92",
                                "chunk-267e8b83": "197218e7927626a972b2",
                                "chunk-2c9cbf7d": "43a01c43743a1f12e5e7",
                                "chunk-2d229604": "31d6cfe0d16ae931b73c",
                                "chunk-3c96c280": "134cf9e930b9388506be",
                                "chunk-42d3cef2": "31b84d82772450aabe41",
                                "chunk-448e8dc0": "96cd8dadbc3574ad63c1",
                                "chunk-499c8c9e": "5d3778197fb26bb2c4f9",
                                "chunk-4d37badf": "8d8fc99b02262e06e26d",
                                "chunk-51041bd2": "8f362aa32f185d1a2973",
                                "chunk-5a176030": "4bdc162dfe9213cb7e8b",
                                "chunk-7439b4d6": "f96352b6d9bc3d036d77",
                                "chunk-7b2d3c6c": "d832b03002d5ba8453ef",
                                "chunk-90b62210": "86ebb403f264b89bbdc3",
                                "chunk-917a1616": "530e015c5d3e1da6f441",
                                "chunk-a6387a5a": "dcca4c09c21975621409",
                                "chunk-c49a4b74": "5a95ddd66fb2b2f8ca0b",
                                "chunk-03c1e51b": "ae8eb34254571106c46a",
                                "chunk-0a0940d2": "602af8ac72f0ea90f30d",
                                "chunk-0f5c621f": "31d6cfe0d16ae931b73c",
                                "chunk-1610edc9": "5b98e34d0c34ed1ddf96",
                                "chunk-1865ea2a": "4d71681e83b91bc9ad59",
                                "chunk-1ad4b1ee": "dec464cd395d97632fe2",
                                "chunk-1f7f9f18": "7bbd04b01fa88e369f9b",
                                "chunk-25102708": "31d6cfe0d16ae931b73c",
                                "chunk-6b05f859": "763315ae28f67dd0d547",
                                "chunk-28b5551d": "c8047fec1f6c9a6abe15",
                                "chunk-2b9bd79e": "c56020f7e79093049084",
                                "chunk-2d0b6e7a": "31d6cfe0d16ae931b73c",
                                "chunk-2d0b95da": "31d6cfe0d16ae931b73c",
                                "chunk-2d182ed7": "e5e8cd0f45bddce02cb4",
                                "chunk-2f2ca2ce": "f28630c5826870091677",
                                "chunk-31725419": "a0fc43bc945226587aec",
                                "chunk-31df845a": "f680e3ca942dd122a1c2",
                                "chunk-36210c95": "af102c2a0a07332f0574",
                                "chunk-394a284a": "865b6007136f94264139",
                                "chunk-3a7e2760": "f24ed11b6becebfc0663",
                                "chunk-3b1ce5d8": "4ef2638fde3a579df2f1",
                                "chunk-3d9d0e28": "1f9c4fd51c783de5fe60",
                                "chunk-3ec117f6": "89ff4f27387917850fb7",
                                "chunk-43a507d9": "3e34ba71f07ad7f1b4a4",
                                "chunk-449328d6": "cd87088673617eb83905",
                                "chunk-46c92a3d": "86a32ddde96d9b763d9f",
                                "chunk-47a04560": "064b38c6af9e87550c4d",
                                "chunk-4888bb2e": "93457efd0d118db5cf12",
                                "chunk-4a6d8cf0": "af066ed72a3b11c835e5",
                                "chunk-4e3e4f21": "c3601686c88c420e6e35",
                                "chunk-4ec92e32": "601afab4212fab62ec00",
                                "chunk-4fe55158": "0b1bd5435188e7a1f13b",
                                "chunk-520a8c66": "31d6cfe0d16ae931b73c",
                                "chunk-53b2b972": "8fbac35da9d1932e4c1d",
                                "chunk-57e3cc40": "17b03dfc072842dc6813",
                                "chunk-57e6a106": "4e1cb798d20350f6e1bd",
                                "chunk-582f4b2a": "31d6cfe0d16ae931b73c",
                                "chunk-58f1df36": "3ba15c84327d7e276839",
                                "chunk-5912e734": "00adc06b2d8b2ad7017e",
                                "chunk-59b7ffc8": "fd474c798702ef214fac",
                                "chunk-5c8a8beb": "2200017a2ab414d0ef7a",
                                "chunk-5d2111d6": "203b641de02357aca903",
                                "chunk-6de5407c": "f680e3ca942dd122a1c2",
                                "chunk-71985e58": "71d70d9fe8ec4f5a01eb",
                                "chunk-73d0c6bf": "7b4d6dc03d95ac8b82f6",
                                "chunk-751b3925": "b47294aadbcb45aad8c8",
                                "chunk-7575032e": "816e1a7eb36dcb4a81b5",
                                "chunk-773bef97": "728f9c5d860a52aeedae",
                                "chunk-72e7daef": "0b1bd5435188e7a1f13b",
                                "chunk-a3f7ba9c": "6ff82decdcb65a0e10dc",
                                "chunk-785926d5": "f4534cf472c15a3c047d",
                                "chunk-795a3056": "badae901454825af52e7",
                                "chunk-7ee05792": "ef587caf0e18912fd7d3",
                                "chunk-7f923980": "5c376b9b415d9e971aae",
                                "chunk-7faeb13b": "8e51a7369253879144e1",
                                "chunk-82f932e8": "ddb4abd7a171f1a1492f",
                                "chunk-85f1646a": "57e65cdd1871ff6d5866",
                                "chunk-86cd8e92": "197a3e791c1cb562a5ce",
                                "chunk-89c8313e": "43561535c44acf17b77e",
                                "chunk-89ce40fe": "6f522db2b4229c9d0305",
                                "chunk-8f890bf8": "ce368eabc325137965d3",
                                "chunk-9c8a29d2": "fd474c798702ef214fac",
                                "chunk-a36a538e": "3a9dfecfe8ac7212051a",
                                "chunk-aa1532c0": "56293e147a0e836ee0df",
                                "chunk-ac762624": "786ed453e62b0d873ce8",
                                "chunk-b45af54e": "407ecdce376ab9172684",
                                "chunk-bed30930": "3fc482b1f73ca64d2cab",
                                "chunk-cc8775f0": "278112a4c23cb9842f1c",
                                "chunk-cd91c9d4": "b80382798351d7ff40f8",
                                "chunk-d101f7ee": "08ca3d687d3b30b300a0",
                                "chunk-d2260cfa": "32134ce270a2ad717c3c",
                                "chunk-d7b55714": "88d08f0bf9289bc8ff32",
                                "chunk-d89427e4": "56ee15665ed86ea84182",
                                "chunk-dde75352": "f4534cf472c15a3c047d",
                                "chunk-e9f20a10": "64513341df1fc77d90b0",
                                "chunk-388c8778": "9650e84471d770852099",
                                "chunk-483ecc60": "6bb8af7878064ac55bf4",
                                "chunk-5b9ea7b2": "7fb53dafcf07738489dd",
                                "chunk-b8515eb0": "a71c5227d7734bf00d6b",
                                "chunk-f47f9924": "0875d1311f9b524c5b22",
                                "chunk-f48fd4fa": "87800dde1908263c0de1",
                                "chunk-f532982c": "267a8347a58683051bb8",
                                "chunk-fecb1c96": "31d6cfe0d16ae931b73c",
                                "chunk-f7bf2820": "20efe7934154a03daa97",
                                "chunk-0d5bff33": "d8c24a6b422d6b0e7008",
                                "chunk-132ac30a": "03837e13abb7d7465f93",
                                "chunk-19d4b719": "59a9cbf53691301b9b29",
                                "chunk-222c0c97": "c73092e49dbd67b8fa5c",
                                "chunk-25d5d63f": "f0956acef6691c6531fe",
                                "chunk-3602d3fe": "25d11f8b08b0dcf46448",
                                "chunk-3e064585": "6efbcbd7b0b44e83eeaa",
                                "chunk-42132f94": "e4aa78417b9c83ce8f0d",
                                "chunk-59d2d191": "b2c5df81b3a6c6c28e3b",
                                "chunk-7361def8": "0e34506f5d4d3eabf539",
                                "chunk-77a4fa48": "f0956acef6691c6531fe",
                                "chunk-9380fdd4": "b04683d0f15e672f6721",
                                "chunk-ba45a5a2": "89aaf45883fafb82d276",
                                "chunk-d1800290": "baa50425ef7745fa92b6",
                                "chunk-e98c2a56": "9a94e578fe1a6eb57c5c",
                                "chunk-7f4715e0": "425e4335cee9ec6598e5",
                                "chunk-06cfb6e6": "fe46555c6cbdd36ffa14",
                                "chunk-12603dc6": "da2344252ac17bcec3b7",
                                "chunk-53c02af9": "28de64a29194ae904582",
                                "chunk-9dedcf20": "60d49df91346c9cb75c9",
                                "chunk-4565e728": "519cc2ecb0050e3a11b0",
                                "chunk-96b515b0": "a081896ff3705c29632f",
                                "chunk-1f1f3f5e": "737da8406a45de7dee47",
                                "chunk-5d4c8547": "bfc2c84b5d7ffed915c3",
                                "chunk-cd890f08": "7106ecabcf6456eaa72c",
                                "chunk-d33ff21e": "5f3408adabc2d4fdce76",
                                "chunk-daada084": "6c643c2f74d0254009bb",
                                "chunk-557638a0": "31d6cfe0d16ae931b73c"
                            }
                            [e] + ".css?v=1606826045648", s = r.p + n, o = document.getElementsByTagName("link"), c = 0; c < o.length; c++) {
                            var u = o[c],
                            d = u.getAttribute("data-href") || u.getAttribute("href");
                            if ("stylesheet" === u.rel && (d === n || d === s))
                                return t()
                        }
                        var l = document.getElementsByTagName("style");
                        for (c = 0; c < l.length; c++) {
                            u = l[c],
                            d = u.getAttribute("data-href");
                            if (d === n || d === s)
                                return t()
                        }
                        var f = document.createElement("link");
                        f.rel = "stylesheet",
                        f.type = "text/css",
                        f.onload = t,
                        f.onerror = function (t) {
                            var n = t && t.target && t.target.src || s,
                            o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                            o.code = "CSS_CHUNK_LOAD_FAILED",
                            o.request = n,
                            delete i[e],
                            f.parentNode.removeChild(f),
                            a(o)
                        },
                        f.href = s;
                        var h = document.getElementsByTagName("head")[0];
                        h.appendChild(f)
                    })).then((function () {
                        i[e] = 0
                    })));
        var n = s[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var o = new Promise((function (t, a) {
                            n = s[e] = [t, a]
                        }));
                t.push(n[2] = o);
                var u,
                d = document.createElement("script");
                d.charset = "utf-8",
                d.timeout = 120,
                r.nc && d.setAttribute("nonce", r.nc),
                d.src = c(e);
                var l = new Error;
                u = function (t) {
                    d.onerror = d.onload = null,
                    clearTimeout(f);
                    var a = s[e];
                    if (0 !== a) {
                        if (a) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                            i = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + n + ": " + i + ")",
                            l.name = "ChunkLoadError",
                            l.type = n,
                            l.request = i,
                            a[1](l)
                        }
                        s[e] = void 0
                    }
                };
                var f = setTimeout((function () {
                            u({
                                type: "timeout",
                                target: d
                            })
                        }), 12e4);
                d.onerror = d.onload = u,
                document.head.appendChild(d)
            }
        return Promise.all(t)
    },
    r.m = e,
    r.c = n,
    r.d = function (e, t, a) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    },
    r.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    r.t = function (e, t) {
        if (1 & t && (e = r(e)), 8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (r.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e)
                r.d(a, n, function (t) {
                    return e[t]
                }
                    .bind(null, n));
        return a
    },
    r.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        }
         : function () {
            return e
        };
        return r.d(t, "a", t),
        t
    },
    r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    r.p = "/v2/",
    r.oe = function (e) {
        throw console.error(e),
        e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
    d = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var l = 0; l < u.length; l++)
        t(u[l]);
    var f = d;
    o.push([0, "chunk-vendors"]),
    a()
})
/*
({
    0: function (e, t, a) {
        e.exports = a("56d7")
    },
    "0d0f": function (e, t, a) {},
    "138e": function (e, t, a) {
        a("ac1f"),
        a("5319"),
        e.exports = [{
                name: "登录",
                type: 1,
                pcPath: "/site/login",
                mobilePath: "/site/m_login"
            }, {
                name: "服务大厅",
                type: 1,
                pcPath: "/site/service",
                mobilePath: "/site/m_index"
            }, {
                name: "应用组",
                type: 1,
                pcPath: "/site/appGroup",
                mobilePath: "/site/m_appGroup"
            }, {
                name: "首页",
                type: 1,
                pcPath: "*",
                mobilePath: "/site/m_index"
            }, {
                name: "首页",
                type: 1,
                pcPath: "/site/index",
                mobilePath: "/site/m_index"
            }, {
                name: "个人信息",
                type: 1,
                pcPath: "/site/personal",
                mobilePath: "/site/m_personal"
            }, {
                name: "个人信息中心",
                type: 1,
                pcPath: "/site/upcPersonal",
                mobilePath: "/site/m_upcPersonal"
            }, {
                name: "个人中心",
                type: 2,
                pcPath: "/site/ucenter",
                mobilePath: "/site/m_message",
                changeFunc: function (e, t, a) {
                    a.query.showroute && "infoCenter" != a.query.showroute || e.replace({
                        path: t,
                        query: a.query
                    })
                }
            }, {
                name: "添加流程图",
                type: 1,
                pcPath: "/bpmn/addBpmn",
                mobilePath: "/from/m_addBpmn"
            }, {
                name: "编辑流程图",
                type: 2,
                pcPath: "/bpmn/editBpmn",
                mobilePath: "/bpmn/m_editBpmn",
                changeFunc: function (e, t, a) {
                    "launch" == a.query.showRoute ? e.replace({
                        path: "/matter/index" == t ? "/matter/index" : "/matter/m_launch",
                        query: a.query
                    }) : e.replace({
                        path: "/matter/index" == t ? "/matter/index" : "/matter/m_index",
                        query: a.query
                    })
                }
            }, {
                name: "事项详情",
                type: 1,
                pcPath: "/matter/detail",
                mobilePath: "/matter/m_detail"
            }, {
                name: "事项发起",
                type: 1,
                pcPath: "/matter/start",
                mobilePath: "/matter/m_start"
            }, {
                name: "分步发起",
                type: 1,
                pcPath: "/matter/startStep",
                mobilePath: "/matter/m_startStep"
            }, {
                name: "驳回分步",
                type: 1,
                pcPath: "/matter/rejectStep",
                mobilePath: "/matter/m_rejectStep"
            }, {
                name: "事项审批",
                type: 1,
                pcPath: "/matter/examine",
                mobilePath: "/matter/m_examine"
            }, {
                name: "我的事项",
                type: 2,
                pcPath: "/matter/index",
                mobilePath: "/matter/m_launch",
                changeFunc: function (e, t, a) {
                    "launch" == a.query.page ? e.replace({
                        path: "/matter/index" == t ? "/matter/index" : "/matter/m_launch",
                        query: a.query
                    }) : e.replace({
                        path: "/matter/index" == t ? "/matter/index" : "/matter/m_index",
                        query: a.query
                    })
                }
            }, {
                name: "我的事项",
                type: 2,
                pcPath: "/matter/index",
                mobilePath: "/matter/m_index",
                changeFunc: function (e, t, a) {
                    "launch" == a.query.page ? e.replace({
                        path: "/matter/index" == t ? "/matter/index" : "/matter/m_launch",
                        query: a.query
                    }) : e.replace({
                        path: "/matter/index" == t ? "/matter/index" : "/matter/m_index",
                        query: a.query
                    })
                }
            }, {
                name: "数据中心",
                type: 1,
                pcPath: "/report/index",
                mobilePath: "/report/m_index"
            }, {
                name: "报表详情",
                type: 1,
                pcPath: "/report/detail",
                mobilePath: "/report/m_detail"
            }
        ]
    },
    "1d8b": function (e, t, a) {
        "use strict";
        a("c975");
        var n = {
            getApi: function (e) {
                var t = appConfig.apis[e];
                return t ? t.indexOf("mock") < 0 ? appConfig.apiBaseUrl + t : t : ""
            }
        };
        t["a"] = n
    },
    "381c": function (e, t) {
        e.exports = {
            port: "8883",
            devApi: "test-workflow.campusapp.com.cn",
            onLineDomainName: "test.office.rlstech.cn",
            onlineDebug: !1,
            baseUrl: "",
            apiBaseUrl: "",
            staticUrl: "/static/",
            routeBasePath: "/v2/",
            uploadUrl: "https://dev-officeflowimg.rlstech.cn/",
            upImageUrl: "http://test.officeflowimg.rlstech.cn/",
            upFileUrl: "",
            uidKey: "vjuid",
            sourceV: (new Date).getTime(),
            apis: {
                frameToLogin: "/api/login/main",
                getSiteConfig: "/api/home/site-options",
                getAllAuth: "/site/user/auth",
                getUserName: "/site/user/get-name",
                uploadindex: "/api/upload/index"
            },
            pcMobileChange: [],
            customConfig: {
                isToInfoCenter: !0,
                isToPdf: {
                default:
                    1
                },
                ucenterPath: {
                default:
                    "site/personal"
                },
                toPdfHttp: "https://",
                oldPrintPage: {
                    margin: "20px"
                },
                newPrintPage: {
                    margin: "0"
                },
                formLandscape: {}
            }
        }
    },
    4274: function (e, t, a) {},
    5557: function (e, t, a) {
        "use strict";
        var n = function (e) {
            this.config = {
                DbName: "BrowerDb",
                expires: 0
            },
            this.initDb(e)
        };
        n.prototype.initDb = function (e) {
            for (var t in e)
                this.config[t] = void 0 !== this.config[t] ? e[t] : this.config[t];
            this.config.DbTime = this.config.DbName + "_time"
        },
        n.prototype.getKey = function (e) {
            return this.config.DbName + "_" + e
        },
        n.prototype.setLItem = function (e, t, a) {
            if (this.clearOverData(), a = void 0 === a ? this.config.expires : a, this.removeLItem(e), a) {
                var n = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
                i = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {};
                n[e] = t,
                i[e] = this.getSelfTime(a),
                localStorage.setItem(this.config.DbName, JSON.stringify(n)),
                localStorage.setItem(this.config.DbTime, JSON.stringify(i))
            } else
                localStorage.setItem(this.getKey(e), JSON.stringify(t))
        },
        n.prototype.getLItem = function (e) {
            this.clearOverData();
            var t = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
            a = JSON.parse(localStorage.getItem(this.getKey(e)));
            return null !== a ? a : void 0 !== t[e] ? t[e] : null
        },
        n.prototype.removeLItem = function (e) {
            this.clearOverData();
            var t = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
            a = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {},
            n = {},
            i = {};
            if (void 0 !== t[e]) {
                for (var s in t)
                    e !== s && (n[s] = t[s], i[s] = a[s]);
                localStorage.setItem(this.config.DbName, JSON.stringify(n)),
                localStorage.setItem(this.config.DbTime, JSON.stringify(i))
            }
            localStorage.removeItem(this.getKey(e))
        },
        n.prototype.clearLAll = function () {
            localStorage.removeItem(this.config.DbName),
            localStorage.removeItem(this.config.DbTime)
        },
        n.prototype.clearOverData = function () {
            var e = null != localStorage.getItem(this.config.DbName) ? JSON.parse(localStorage.getItem(this.config.DbName)) : {},
            t = null != localStorage.getItem(this.config.DbTime) ? JSON.parse(localStorage.getItem(this.config.DbTime)) : {},
            a = this.getSelfTime(0),
            n = {},
            i = {};
            for (var s in t)
                t[s] > a && void 0 !== e[s] && (n[s] = e[s], i[s] = t[s]);
            localStorage.setItem(this.config.DbName, JSON.stringify(n)),
            localStorage.setItem(this.config.DbTime, JSON.stringify(i))
        },
        n.prototype.getSelfTime = function (e) {
            var t = new Date;
            return t.setTime(t.getTime() + parseInt(e)),
            t.getTime()
        },
        n.prototype.setSItem = function (e, t) {
            sessionStorage.setItem(this.getKey(e), JSON.stringify(t))
        },
        n.prototype.getSItem = function (e) {
            return JSON.parse(sessionStorage.getItem(this.getKey(e)))
        },
        n.prototype.removeSItem = function (e) {
            sessionStorage.removeItem(this.getKey(e))
        },
        t["a"] = new n({
                DbName: "officeDb",
                expires: 0
            })
    },
    "56d7": function (e, t, a) {
        "use strict";
        a.r(t);
        a("c703"),
        a("ee75"),
        a("9edd"),
        a("d3f4");
        var n = a("a026"),
        i = (a("caad"), a("c975"), a("fb6a"), a("5530")),
        s = a("381c"),
        o = a("138e"),
        c = a("a4d9"),
        r = a("e425");
        if (s.port = location.port, s.domainName = location.hostname, s.baseUrl = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "") + s.routeBasePath, -1 !== location.href.indexOf("local."))
            s.apiBaseUrl = "https://" + s.devApi;
        else {
            var u = s.onlineDebug && "test." == location.hostname.substr(0, 5) ? location.hostname.slice(5) : location.hostname,
            d = s.onlineDebug ? "https:" : location.protocol;
            s.apiBaseUrl = d + "//" + u + (["", "80", "8883"].includes(location.port) ? "" : ":" + location.port)
        }
        s.upFileUrl = s.apiBaseUrl + "/site/attach?file=all/",
        s.uploadUrl = s.apiBaseUrl,
        s.staticUrl = s.baseUrl + "static/",
        s.apis = Object(i["a"])(Object(i["a"])({}, s.apis), r),
        s.pcMobileChange = o,
        c.customConfig = Object(i["a"])(Object(i["a"])({}, s.customConfig), c.customConfig),
        s = Object(i["a"])(Object(i["a"])({}, s), c),
        window.appConfig = s,
        n["default"].prototype.appConfig = s;
        var l = a("1157"),
        f = a.n(l),
        h = (a("0fb7"), a("450d"), a("f529")),
        p = a.n(h),
        m = (a("9e1f"), a("6ed5")),
        b = a.n(m),
        g = (a("fa4c"), a("e360")),
        y = a.n(g),
        k = (a("3db2"), a("58b8")),
        v = a.n(k),
        L = (a("b0ee"), a("d180")),
        S = a.n(L),
        w = (a("a335"), a("c0bb")),
        j = a.n(w),
        I = (a("f225"), a("89a9")),
        C = a.n(I),
        P = (a("6b30"), a("c284")),
        T = a.n(P),
        N = (a("78a7"), a("33ca")),
        _ = a.n(N),
        x = (a("bd49"), a("18ffb")),
        D = a.n(x),
        A = (a("960d"), a("defb")),
        O = a.n(A),
        E = (a("cb70"), a("b370")),
        M = a.n(E),
        R = (a("a586"), a("7464")),
        U = a.n(R),
        F = (a("0c67"), a("299c")),
        B = a.n(F),
        H = (a("cbb5"), a("8bbc")),
        K = a.n(H),
        q = (a("be4f"), a("896a")),
        W = a.n(q),
        J = (a("b84d"), a("c216")),
        G = a.n(J),
        z = (a("8f24"), a("76b9")),
        V = a.n(z),
        Y = (a("186a"), a("301f")),
        X = a.n(Y),
        Q = (a("96dc"), a("9cea")),
        Z = a.n(Q),
        ee = (a("672e"), a("101e")),
        te = a.n(ee),
        ae = (a("5466"), a("ecdf")),
        ne = a.n(ae),
        ie = (a("38a0"), a("ad41")),
        se = a.n(ie),
        oe = (a("eca7"), a("3787")),
        ce = a.n(oe),
        re = (a("425f"), a("4105")),
        ue = a.n(re),
        de = (a("6611"), a("e772")),
        le = a.n(de),
        fe = (a("1f1a"), a("4e4b")),
        he = a.n(fe),
        pe = (a("d4df"), a("7fc1")),
        me = a.n(pe),
        be = (a("c526"), a("1599")),
        ge = a.n(be),
        ye = (a("560b"), a("dcdc")),
        ke = a.n(ye),
        ve = (a("a7cc"), a("df33")),
        Le = a.n(ve),
        Se = (a("5e32"), a("6721")),
        we = a.n(Se),
        je = (a("4ffc"), a("946e")),
        Ie = a.n(je),
        Ce = (a("826b"), a("c263")),
        Pe = a.n(Ce),
        Te = (a("1951"), a("eedf")),
        Ne = a.n(Te),
        _e = (a("fe07"), a("6ac5")),
        xe = a.n(_e),
        De = (a("b5d8"), a("f494")),
        Ae = a.n(De),
        Oe = (a("10cb"), a("f3ad")),
        Ee = a.n(Oe),
        Me = (a("f4f9"), a("c2cc")),
        Re = a.n(Me),
        Ue = (a("7a0f"), a("0f6c")),
        Fe = a.n(Ue),
        Be = (a("06f1"), a("6ac9")),
        He = a.n(Be),
        Ke = (a("e612"), a("dd87")),
        $e = a.n(Ke),
        qe = (a("075a"), a("72aa")),
        We = a.n(qe),
        Je = (a("de31"), a("c69e")),
        Ge = a.n(Je),
        ze = (a("a673"), a("7b31")),
        Ve = a.n(ze);
        n["default"].use(Ve.a),
        n["default"].use(Ge.a),
        n["default"].use(We.a),
        n["default"].use($e.a),
        n["default"].use(He.a),
        n["default"].use(Fe.a),
        n["default"].use(Re.a),
        n["default"].use(Ee.a),
        n["default"].use(Ae.a),
        n["default"].use(xe.a),
        n["default"].use(Ne.a),
        n["default"].use(Pe.a),
        n["default"].use(Ie.a),
        n["default"].use(we.a),
        n["default"].use(Le.a),
        n["default"].use(ke.a),
        n["default"].use(ge.a),
        n["default"].use(me.a),
        n["default"].use(he.a),
        n["default"].use(le.a),
        n["default"].use(ue.a),
        n["default"].use(ce.a),
        n["default"].use(se.a),
        n["default"].use(ne.a),
        n["default"].use(te.a),
        n["default"].use(Z.a),
        n["default"].use(X.a),
        n["default"].use(V.a),
        n["default"].use(G.a),
        n["default"].use(W.a),
        n["default"].use(K.a),
        n["default"].use(B.a),
        n["default"].use(U.a),
        n["default"].use(M.a),
        n["default"].use(O.a),
        n["default"].use(D.a),
        n["default"].use(_.a),
        n["default"].use(T.a),
        n["default"].use(C.a),
        n["default"].use(j.a),
        n["default"].use(S.a),
        n["default"].use(v.a),
        n["default"].use(y.a),
        n["default"].prototype.$MessageBox = b.a,
        n["default"].prototype.$message = p.a;
        var Ye = a("a925"),
        Xe = a("b2d6"),
        Qe = a.n(Xe),
        Ze = a("f0d9"),
        et = a.n(Ze),
        tt = a("4897"),
        at = a.n(tt),
        nt = {
            thirdpartyApplyBtn: "立即申请",
            serviceDepart: "服务部门",
            serviceOpenTiem: "起止时间",
            openingHoursText: "长期",
            taskSubmitBtn: "正式提交",
            xmlTab: "流程图",
            wxHotTit: "热门服务",
            rejectTips: "请立刻修改，重新提交",
            navPersonalEntry: "个人中心",
            mySubmit: "我的发起",
            myTask: "我的任务",
            noSubmit: "暂无数据",
            noTask: "暂无数据",
            noOversee: "暂无数据",
            noRead: "暂无数据",
            matterLog: "操作意见",
            thirdpartyBtnText: "查看表单",
            reportEmailExportText: "请输入邮箱地址",
            rejectText: "驳回",
            className: "服务分类",
            numberText: "学工号",
            infoQuery: "信息查询",
            nextNodeTitleText: "请设置下一个节点审批人或短信发送",
            m_startForm: "申请表单",
            loginSignUpText: "校外用户注册",
            loginpwdResetText: "校外用户忘记密码",
            loginSignUpPopText: "校外用户注册账户",
            sitePwdResetText: "校外用户密码找回"
        },
        it = {
            serviceDepart: "业务归属部门",
            serviceOpenTiem: "事项开放时间"
        };
        n["default"].use(Ye["a"]);
        var st = {
            en: Object(i["a"])(Object(i["a"])({}, Qe.a), {}, {
                system: Object(i["a"])(Object(i["a"])({}, nt), it)
            }),
            zh: Object(i["a"])(Object(i["a"])({}, et.a), {}, {
                system: Object(i["a"])(Object(i["a"])({}, nt), it)
            })
        },
        ot = new Ye["a"]({
                locale: "zh",
                messages: st
            });
        at.a.i18n((function (e, t) {
                return ot.t(e, t)
            }));
        var ct = ot,
        rt = (a("4274"), a("91a3")),
        ut = (a("6128"), a("e8d2")),
        dt = {
            pieceConfig: {
                webIndexLink: {
                default:
                    "/site/index",
                    xidian: "/site/outlink?outlink=" + encodeURIComponent("http://ehall.xidian.edu.cn/new/index_xd.html#/home")
                },
                webServiceLink: {
                default:
                    "/site/service",
                    xidian: "/site/outlink?outlink=" + encodeURIComponent("http://ehall.xidian.edu.cn/new/index_xd.html#/search")
                },
                ncepuPersonalTit: {
                    path: "/site/personal",
                    ncepu: "教师综合信息查询系统"
                },
                addSreviceShow: {
                default:
                    !0,
                    xidian: !1,
                    cufe: !1,
                    pku: !1
                },
                moveTips: {
                default:
                    !1,
                    cufe: !0
                },
                formitem: {
                default: {
                        type: !0,
                        id: []
                    },
                    ncepu: {
                        type: !1,
                        id: ["83", "97"]
                    }
                },
                showToPersonal: {
                default:
                    !0,
                    xidian: !1,
                    nwu: !1,
                    buaa: !1,
                    pku: !1,
                    uestc: !1,
                    bnu: !1
                },
                setDate: {
                default:
                    !1,
                    cufe: !0,
                    pku: !0
                },
                oucHide: {
                default:
                    !0,
                    ouc: !1
                },
                mobilePersonal: {
                default:
                    !0,
                    xidian: !1,
                    fudan: !1,
                    bjtu: !1
                },
                hideHeader: {
                default:
                    !1,
                    bjut: !0
                },
                redTag: {
                default:
                    [],
                    upc: []
                },
                documentTitle: {
                default:
                    "",
                    buaa: "网上办事大厅"
                },
                messageCtrl: {
                default:
                    "信息查询",
                    upc: "信息管理"
                },
                upcTiaoUrl: {
                default:
                    !0,
                    upc: !1
                },
                isToInfoCenter: {
                default:
                    !0,
                    buaa: !1,
                    nwu: !1,
                    pku: !1
                },
                showHandleNum: {
                default:
                    !0,
                    buaa: !1
                },
                leftModelSort: {
                default:
                    [1, 2, 3],
                    buaa: [3, 2, 1]
                },
                rightModelSort: {
                default:
                    [4, 5, 6],
                    buaa: [6, 5, 4],
                    ppsuc: [6, 5, 4]
                },
                forgetPwd: {
                default:
                    !1,
                    nwu: "http://app.nwu.edu.cn/form/wap/default?formid=11"
                },
                showHelper: {
                default:
                    !1,
                    upc: !0
                },
                isCcom: {
                default:
                    !1,
                    ccom: !0
                },
                upcHide: {
                default:
                    [],
                    upc: [392, 393, 394, 397, 398, 333]
                },
                showSignAndAuth: {
                default:
                    !0
                },
                showEntrust: {
                default:
                    !1,
                    dev: !0,
                    pku: !0,
                    test: !0
                },
                rejectOrReturn: {
                default:
                    !1,
                    pku: !0
                },
                webText: {
                default: {
                        taskSubmitBtn: "正式提交",
                        xmlTab: "流程图",
                        wxHotTit: "热门服务",
                        rejectTips: "请立刻修改，重新提交",
                        navPersonalEntry: "个人中心",
                        mySubmit: "我的发起",
                        myTask: "我的任务",
                        noSubmit: "暂无数据",
                        noTask: "暂无数据",
                        noOversee: "暂无数据",
                        noRead: "暂无数据",
                        serviceDepart: "服务部门",
                        serviceOpenTiem: "起止时间",
                        matterLog: "操作意见",
                        thirdpartyBtnText: "查看表单",
                        thirdpartyApplyBtn: "立即申请"
                    },
                    pku: {
                        taskSubmitBtn: "提交审批",
                        xmlTab: "办事流程",
                        rejectTips: "可修改后重新提交",
                        mySubmit: "我的申请",
                        myTask: "待办事项",
                        noSubmit: "您还未提交过申请",
                        noTask: "暂无待办事项",
                        noOversee: "暂无督办的事项",
                        noRead: "暂无知会的事项"
                    },
                    ppsuc: {
                        wxHotTit: "一张表建设专栏"
                    },
                    buaa: {
                        thirdpartyBtnText: "详细信息"
                    },
                    ncepu: {
                        serviceDepart: "业务归属部门",
                        serviceOpenTiem: "事项开放时间"
                    },
                    fudan: {
                        matterLog: "操作",
                        thirdpartyApplyBtn: "进入服务"
                    },
                    upc: {
                        xmlTab: "办理流程"
                    }
                },
                noDataSet: {
                default:
                    !1,
                    pku: !0
                },
                matterCustom: {
                default: {
                        264: !0
                    },
                    cufe: {
                        341: !0
                    }
                },
                isToPdf: {
                default: {
                    default:
                        1
                    },
                    test: {
                    default:
                        2
                    },
                    cufe: {
                    default:
                        2
                    },
                    pku: {
                    default:
                        3
                    },
                    nwu: {
                    default:
                        3
                    },
                    bupt: {
                    default:
                        2
                    },
                    upc: {
                    default:
                        1,
                        201: 2,
                        183: 4,
                        316: 4,
                        315: 2
                    },
                    ucas: {
                    default:
                        2
                    },
                    bjut: {
                    default:
                        2
                    },
                    cup: {
                    default:
                        2
                    },
                    zhongxi: {
                    default:
                        2
                    },
                    ppsuc: {
                    default:
                        2
                    },
                    muc: {
                    default:
                        2
                    }
                },
                isQuickDownload: {
                default: {
                    default:
                        !1
                    },
                    test: {
                    default:
                        !1,
                        1377: !0
                    }
                },
                isShowPrint: {
                default: {
                    default:
                        !0
                    },
                    upc: {
                    default:
                        !0
                    },
                    test: {
                    default:
                        !0
                    }
                },
                showPrinter: {
                default:
                    !1,
                    buaa: !0,
                    test: !0,
                    dev: !0
                },
                ispku: {
                default:
                    !1,
                    pku: !0,
                    test: !1,
                    dev: !1
                },
                hasSms: {
                default:
                    !0
                },
                startExemCLosePage: {
                default:
                    !1,
                    xidian: !0
                },
                formLandscape: {
                default: {},
                    cufe: {
                        1106: "vertical",
                        1361: "vertical"
                    }
                },
                showStatistics: {
                default:
                    !1,
                    dev: !0,
                    test: !0,
                    cufe: !0
                },
                toOneTablePass: {
                default:
                    "/site/personal",
                    bupt: "http://me.bupt.edu.cn/page/backHome/index",
                    ncepu: "http://me.ncepu.edu.cn/page/backHome/index",
                    cup: "http://me.cup.edu.cn/page/backHome/index",
                    ucas: "http://sep.ucas.ac.cn/portal/site/419/from/aHR0cHM6Ly9tZS51Y2FzLmFjLmNuL3BhZ2UvYmFja0hvbWUvaW5kZXg=",
                    bift: "http://me.bift.edu.cn/page/backHome/index"
                },
                isBupt: {
                default:
                    !1,
                    bupt: !0
                },
                isNcepu: {
                default:
                    !1,
                    ncepu: !0
                },
                isFudan: {
                default:
                    !1,
                    fudan: !0
                },
                hideBreadcrumb: {
                default:
                    !1,
                    fudan: !0
                },
                pkuSuggestion: {
                default:
                    [],
                    pku: [352]
                },
                oucHideBtn: {
                default:
                    !0,
                    ouc: !1
                },
                hideLoadSelect: {
                default:
                    [],
                    pku: [348, 349, 350, 351, 352],
                    ouc: [337, 347, 339, 343, 344]
                },
                hideMobileBtn: {
                default:
                    [],
                    ouc: [337, 347],
                    bjut: [333, 336, 337, 338]
                },
                showLoadDrafSelect: {
                default:
                    [],
                    bjut: [333, 336, 337, 338]
                },
                hideTransient: {
                default:
                    [],
                    pku: [348, 349, 350, 351, 352]
                },
                leaveCountryId: {
                default:
                    [],
                    pku: [370, 372]
                },
                awayFixed: {
                default:
                    [],
                    pku: [348, 349, 350, 351, 352]
                },
                hideBtns: {
                default: {
                        app_id: []
                    },
                    pku: {
                        app_id: [352]
                    }
                },
                pkuDaichuli: {
                default:
                    [],
                    pku: [364, 383]
                },
                oldPrintPage: {
                default: {
                        margin: "20px"
                    },
                    upc: {
                        margin: "15mm 10mm"
                    },
                    bupt: {
                        margin: "30mm 20mm 20mm 20mm"
                    }
                },
                newPrintPage: {
                default: {
                        margin: "0"
                    },
                    upc: {
                        margin: "15mm 10mm"
                    },
                    bupt: {
                        margin: "30mm 20mm 20mm 20mm"
                    }
                },
                showLookForm: {
                default:
                    !1,
                    tsinghua: !0,
                    test: !0
                },
                forbiddenAutoSave: {
                default:
                    !1,
                    ncepu: [67]
                },
                isnacta: {
                default:
                    !1,
                    nacta: !0
                },
                hideBpmnTab: {
                default:
                    [],
                    upc: ["334", "335", "336", "337", "338", "339", "340", "341", "342", "343", "344", "345", "346", "347", "348"]
                },
                toPdfhttp: {
                default:
                    !1,
                    ucas: !0,
                    nwu: !0,
                    bjut: !0,
                    cup: !0
                },
                className: {
                default:
                    "服务分类",
                    ucas: "归属部门"
                },
                statement: {
                default:
                    "请输入邮箱地址",
                    ouc: "请输入邮箱地址(仅可导出到校内邮箱)"
                },
                requiredType: {
                default:
                    0,
                    upc: 1
                },
                threeReportHeaber: {
                default: {
                        54: "测试2"
                    },
                    uir: {
                        5: "Calendar_42",
                        4: "Calendar_42",
                        3: "Calendar_42",
                        2: "Calendar_42"
                    }
                },
                serviceDetailtext: {
                default:
                    "不可重复申请",
                    buaa: {
                        948: "该事项只能发起一次。The application can only be submitted once. Your have already submitted.",
                        946: "该事项只能发起一次。The application can only be submitted once. Your have already submitted."
                    }
                },
                countersigntext: {
                default: {
                    default: {
                            btnText: "加签",
                            already: "已加签",
                            people: "加签人员",
                            successAlert: "成功加签",
                            tagText: "的加签",
                            examineAlert: "加签完成",
                            receiptText: "加签回执",
                            finishText: "已加签"
                        }
                    },
                    ppsuc: {
                    default: {
                            btnText: "加签",
                            already: "已加签",
                            people: "加签人员",
                            successAlert: "成功加签",
                            tagText: "的加签",
                            examineAlert: "加签完成",
                            receiptText: "加签回执",
                            finishText: "已加签"
                        },
                        392: {
                            btnText: "转经办人",
                            already: "已转经办人",
                            people: "转经办人员",
                            successAlert: "转经办人成功",
                            tagText: "的转经办人",
                            examineAlert: "转经办人办理完成",
                            receiptText: "转经办人回执",
                            finishText: "已转经办人"
                        }
                    }
                },
                isUestc: {
                default:
                    !1,
                    uestc: !0
                },
                pcServiceHide: {
                default:
                    [],
                    ccom: [413]
                },
                dInputLinkText: {
                default:
                    !1,
                    cufe: !0,
                    fudan: !0
                }
            },
            getConfigLevel: function (e, t) {
                return void 0 !== !this.pieceConfig[e] && (this.pieceConfig[e] && void 0 !== this.pieceConfig[e][ut["a"].getWebId()] ? void 0 !== this.pieceConfig[e][ut["a"].getWebId()][t] ? this.pieceConfig[e][ut["a"].getWebId()][t] : this.pieceConfig[e][ut["a"].getWebId()]["default"] : this.pieceConfig[e]["default"]["default"])
            },
            getConfig: function (e) {
                return void 0 !== !this.pieceConfig[e] && (void 0 !== this.pieceConfig[e][ut["a"].getWebId()] ? this.pieceConfig[e][ut["a"].getWebId()] : this.pieceConfig[e]["default"])
            },
            setTitle: function (e, t) {
                if (void 0 === !this.pieceConfig[e])
                    return !1;
                void 0 != this.pieceConfig[e][ut["a"].getWebId()] && this.pieceConfig[e]["path"] == t && (document.title = this.pieceConfig[e][ut["a"].getWebId()])
            },
            getformitem: function (e, t) {
                if (void 0 === !this.pieceConfig[e])
                    return !0;
                if ("" == t)
                    return !0;
                var a = ut["a"].getWebId(),
                n = "";
                return n = void 0 != this.pieceConfig[e][a] && void 0 != this.pieceConfig[e][a].id && "" != this.pieceConfig[e][a].id && -1 != this.pieceConfig[e][a].id.indexOf(t) ? this.pieceConfig[e][a].type : this.pieceConfig[e]["default"].type,
                n
            },
            getTextConfig: function (e, t, a) {
                if (void 0 === !this.pieceConfig[e])
                    return !1;
                var n = ut["a"].getWebId(),
                i = "";
                return i = void 0 != this.pieceConfig[e][n] && void 0 != this.pieceConfig[e][n][t] ? this.pieceConfig[e][n][t] : this.pieceConfig[e]["default"][t],
                i
            },
            getDetailtest: function (e, t) {
                if (void 0 === !this.pieceConfig[e])
                    return !1;
                var a = ut["a"].getWebId(),
                n = "";
                return n = void 0 != this.pieceConfig[e][a] && void 0 != this.pieceConfig[e][a][t] ? this.pieceConfig[e][a][t] : this.pieceConfig[e]["default"],
                n
            }
        };
        n["default"].prototype.pieceHelper = dt;
        a("9403");
        function lt(e) {
            var t = e.actionType,
            a = e.time,
            n = e.dataKey,
            i = e.newData,
            s = e.cb;
            switch (t) {
            case "setTime":
                this.$getLastTime = this.$getLastTime ? this.$getLastTime : {},
                this.$getLastTime[n] = a;
                break;
            case "setData":
                a == this.$getLastTime[n] && (this.$getLastTime[n] = a, this[n] = i, s && s());
                break
            }
        }
        n["default"].prototype.$setLastData || (n["default"].setLastData = n["default"].prototype.$setLastData = lt);
        a("4160"),
        a("ac1f"),
        a("5319"),
        a("159b"),
        a("99af"),
        a("7db0"),
        a("1276");
        var ft = a("2909"),
        ht = a("8c4f"),
        pt = a("8237"),
        mt = a.n(pt);
        a("6266");
        n["default"].use(ht["a"]);
        var bt = n["default"].prototype.appConfig,
        gt = function (e) {
            this.Router = null,
            this.template = e.template ? e.template : null,
            this.cssInfo = e.cssInfo ? e.cssInfo : null,
            this.publicCss = e.publicCss ? e.publicCss : [],
            this.styleCss = e.styleCss ? e.styleCss : {},
            this.publicJs = e.publicJs ? e.publicJs : [],
            this.needLogins = e.needLogins ? e.needLogins : [],
            this.notneedLogins = e.notneedLogins ? e.notneedLogins : [],
            this.scrollConfig = e.scrollConfig ? e.scrollConfig : null,
            this.ctype = ""
        };
        gt.prototype.checkConfig = function () {
            return !(!this.template || !this.checkTemplate()) || (console.error("template 模板配置错误！"), !1)
        },
        gt.prototype.checkTemplate = function () {
            var e = 0;
            for (var t in this.template) {
                var a = this.template[t];
                for (var n in a) {
                    var i = a[n];
                    if (!i.comLoad || "function" != typeof i.comLoad)
                        return console.error(t + "模块， " + n + "页面，comLoad函数设置错误！"), !1;
                    if (!i.metaInfo || !i.metaInfo.title)
                        return console.error(t + "模块， " + n + "页面，metainfo设置错误！"), !1;
                    e++
                }
            }
            return !!e || (console.error("最少应该有一个页面！"), !1)
        },
        gt.prototype.getBaseRouter = function (e) {
            if (this.Router)
                return this.Router;
            this.Router = new ht["a"]({
                    mode: "history",
                    routes: e,
                    base: bt.routeBasePath,
                    scrollBehavior: function (e, t, a) {
                        return {
                            x: 0,
                            y: 0
                        }
                    }
                });
            var t = this;
            return this.Router.afterEach((function (e) {
                    t.progressEnd(),
                    bt.onlyClient() && t.checkClientSize(e)
                })),
            this.loadMetaInfo(this.Router),
            this.loadOtherSource(this.Router),
            this.Router
        },
        gt.prototype.checkClientSize = function (e) {
            var t = e.matched && e.matched.length && e.matched[0],
            a = -1 !== t.path.indexOf("m_");
            function n() {
                var e = document.documentElement.clientWidth,
                t = 320,
                n = 640,
                i = 760;
                a ? (e < t || e > n) && !0 : e < i && !0,
                $("#check_client_size").remove()
            }
            n(),
            window.addEventListener("resize", n, !1)
        },
        gt.prototype.loadRouter = function () {
            if (!this.checkConfig())
                return !1;
            var e = [],
            t = this.template,
            a = null;
            for (var n in t) {
                var s = t[n];
                for (var o in s) {
                    var c = {
                        name: o,
                        path: "/" + n + "/" + o,
                        component: s[o]["comLoad"],
                        meta: s[o]["metaInfo"]
                    };
                    e.push(c)
                }
            }
            return a = Object(i["a"])(Object(i["a"])({}, {}), e[0]),
            a.path = "*",
            e.push(a),
            this.getBaseRouter(e)
        },
        gt.prototype.getRequire = function (e) {
            return function (t, a) {
                return e("./" + t, a)
            }
        },
        gt.prototype.loadMetaInfo = function (e) {
            var t = this;
            e.beforeEach((function (e, a, n) {
                    t.progressStart(),
                    e.meta.title && commonHelper.getDocumentTitle(e.meta.title, e.path),
                    e.meta.desc && (document.desc = e.meta.desc),
                    n()
                }))
        },
        gt.prototype.sourceArrs = {},
        gt.prototype.loadAllNum = 0,
        gt.prototype.sourceCallBack = null,
        gt.prototype.loadOtherSource = function (e) {
            var t = this;
            e.beforeEach((function (a, n, i) {
                    t.clearSource();
                    var s = "*" == a.matched[0].path ? e.options.routes[0].path : a.path;
                    if (s = s.split("/"), s = [s[1], s[2]], !t.template[s[0]] || !t.template[s[0]][s[1]])
                        return i(), !1;
                    var o = t.publicCss ? t.publicCss : [],
                    c = t.publicJs ? t.publicJs : [],
                    r = t.template[s[0]][s[1]].css ? t.template[s[0]][s[1]].css : [],
                    u = t.template[s[0]][s[1]].js ? t.template[s[0]][s[1]].js : [],
                    d = {
                        css: [].concat(Object(ft["a"])(o), Object(ft["a"])(t.getStyleCss(a.path)), Object(ft["a"])(r)),
                        js: [].concat(Object(ft["a"])(c), Object(ft["a"])(u))
                    };
                    d.css.length || d.js.length ? (t.sourceArrs = d, t.registerSource(a, i)) : i()
                }))
        },
        gt.prototype.getStyleCss = function (e) {
            var t = this.styleCss;
            if (!t.path || !t.baseName.length)
                return [];
            var a = [],
            n = commonHelper.getClientType(e) ? "m." : "",
            i = commonHelper.getClientType(e) ? "mstyle" : "style";
            return t.baseName.forEach((function (e) {
                    a.push(t.path + n + commonHelper.getWebStyle(i) + "." + e)
                })),
            a
        },
        gt.prototype.getClientClass = function (e) {
            return commonHelper.getClientType(e) ? "mobile" : "pc"
        },
        gt.prototype.registerSource = function (e, t) {
            this.sourceCallBack = t;
            var a = this.getClientClass(e.path);
            this.ctype = a,
            this.loadCssSource(a),
            this.loadJsSource(a)
        },
        gt.prototype.clearSource = function () {
            this.sourceArrs = [],
            this.loadAllNum = 0,
            this.sourceCallBack = null
        },
        gt.prototype.loadCssSource = function (e) {
            var t = this;
            this.sourceArrs.css.forEach((function (a) {
                    var n = bt.staticUrl + a,
                    i = mt()(n);
                    if (t.loadAllNum++, $('[data-id="' + i + '"]').length)
                        setTimeout((function () {
                                t.loadSourceSuccess(e)
                            }), 200);
                    else {
                        var s = '<link data-id="' + i + '" data-type="' + e + '" href="' + n + "?v=" + bt.sourceV + '" rel="stylesheet" type="text/css"/>';
                        $("head").append(s),
                        console.log($('[data-id="' + i + '"]'), e),
                        $('[data-id="' + i + '"]').on("load", (function () {
                                t.loadSourceSuccess(e)
                            }))
                    }
                }))
        },
        gt.prototype.loadJsSource = function (e) {
            var t = this;
            this.sourceArrs.js.forEach((function (a) {
                    var n = bt.staticUrl + a,
                    i = mt()(n);
                    if (t.loadAllNum++, $('[data-id="' + i + '"]').length)
                        setTimeout((function () {
                                t.loadSourceSuccess(e)
                            }), 200);
                    else {
                        var s = document.createElement("script");
                        s.src = n + "?v=" + bt.sourceV,
                        s.setAttribute("data-id", i),
                        s.setAttribute("data-type", e),
                        s.type = "text/javascript",
                        s.async = !1,
                        s.setAttribute("data-path", a),
                        s.onload = function () {
                            t.loadSourceSuccess(e)
                        },
                        document.getElementsByTagName("body")[0].appendChild(s)
                    }
                }))
        },
        gt.prototype.loadSourceSuccess = function (e) {
            this.loadAllNum--,
            this.loadAllNum || this.sourceCallBack()
        },
        gt.prototype.beforeEnterModule = function (e) {},
        gt.prototype.progressSelector = "progress_loading",
        gt.prototype.progressStart = function () {
            if (!$("#" + this.progressSelector).length) {
                var e = '<div id="' + this.progressSelector + '"><div></div></div>';
                $("body").append(e)
            }
            this.clearProgress(),
            window.location.hash && -1 !== window.location.hash.indexOf("module_") || $("#" + this.progressSelector).show(),
            this.progressNum = 0,
            this.progressChange(98, 3e3)
        },
        gt.prototype.progressEnd = function () {
            $(".frame-loader").length && $(".frame-loader").remove(),
            this.progressChange(100, 300)
        },
        gt.prototype.progressClearBar = null,
        gt.prototype.progressNum = 0,
        gt.prototype.progressChange = function (e, t) {
            var a = 20,
            n = (e - this.progressNum) / (t / a),
            i = this;
            clearInterval(i.progressClearBar),
            i.progressClearBar = setInterval((function () {
                        if ($("#" + i.progressSelector).find("div").width(i.progressNum + "%"), i.progressNum >= e)
                            return clearInterval(i.progressClearBar), i.progressNum >= 100 && ($("#" + i.progressSelector).hide(), i.clearProgress()), !1;
                        i.progressNum += n
                    }), a)
        },
        gt.prototype.clearProgress = function () {
            $("#" + this.progressSelector).find("div").width("0%")
        };
        var yt = gt,
        kt = a("e644"),
        vt = a("6367"),
        Lt = {
            template: {
                site: {
                    index: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-aa1532c0")]).then(function () {
                                var t = [a("0de5")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "首页",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    login: {
                        comLoad: function (e) {
                            a.e("chunk-499c8c9e").then(function () {
                                var t = [a("9343")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "登录",
                            notNeedLogin: !0,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_login: {
                        comLoad: function (e) {
                            a.e("chunk-4d37badf").then(function () {
                                var t = [a("57ec")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "登录",
                            notNeedLogin: !0,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_signUp: {
                        comLoad: function (e) {
                            a.e("chunk-daada084").then(function () {
                                var t = [a("19d7")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "注册",
                            notNeedLogin: !0,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    pwdReset: {
                        comLoad: function (e) {
                            a.e("chunk-90b62210").then(function () {
                                var t = [a("00d4")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "密码找回",
                            notNeedLogin: !0,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    search: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-2d182ed7")]).then(function () {
                                var t = [a("634d")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "应用搜索",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    printmessage: {
                        comLoad: function (e) {
                            a.e("chunk-3c96c280").then(function () {
                                var t = [a("fb2e")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "提示",
                            notNeedLogin: !0,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    outlink: {
                        comLoad: function (e) {
                            a.e("chunk-2d229604").then(function () {
                                var t = [a("dcd3")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "第三方跳转",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    scan_qrcode: {
                        comLoad: function (e) {
                            a.e("chunk-5a176030").then(function () {
                                var t = [a("74a3")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "确认",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_scan_qrcode: {
                        comLoad: function (e) {
                            a.e("chunk-448e8dc0").then(function () {
                                var t = [a("57b3")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "扫码验证",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    service: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-86cd8e92")]).then(function () {
                                var t = [a("1aa2")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "服务大厅",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    ucenter: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-1610edc9")]).then(function () {
                                var t = [a("fca8")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "个人中心",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    upcPersonal: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-4e3e4f21")]).then(function () {
                                var t = [a("cf4b")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "个人信息中心",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    personal: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-47a04560")]).then(function () {
                                var t = [a("f778")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "个人信息中心",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_index: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-449328d6")]).then(function () {
                                var t = [a("3133")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "首页",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: ["js/wx/swiper.min.js"]
                    },
                    m_search: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-d89427e4")]).then(function () {
                                var t = [a("14e0")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "搜索",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_upcPersonal: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-8f890bf8")]).then(function () {
                                var t = [a("0a688")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "个人信息中心",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_personal: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-bed30930")]).then(function () {
                                var t = [a("4ddc")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "个人信息中心",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_addapp: {
                        comLoad: function (e) {
                            a.e("chunk-7439b4d6").then(function () {
                                var t = [a("c1e4")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "添加应用",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_message: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-3b1ce5d8")]).then(function () {
                                var t = [a("510d")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "信息中心",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_upcChangeInfo: {
                        comLoad: function (e) {
                            a.e("chunk-917a1616").then(function () {
                                var t = [a("acbb")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "个人中心",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: ["css/wx/magic-check.min.css"],
                        js: ["js/wx/mobiscroll_date.js", "js/wx/mobiscroll.js"]
                    },
                    m_changeInfo: {
                        comLoad: function (e) {
                            a.e("chunk-42d3cef2").then(function () {
                                var t = [a("054e")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "个人中心",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: ["css/wx/magic-check.min.css"],
                        js: ["js/wx/mobiscroll_date.js", "js/wx/mobiscroll.js"]
                    },
                    m_pwdReset: {
                        comLoad: function (e) {
                            a.e("chunk-51041bd2").then(function () {
                                var t = [a("7dd3")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "重置密码",
                            notNeedLogin: !0,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_forceResetpwd: {
                        comLoad: function (e) {
                            a.e("chunk-7b2d3c6c").then(function () {
                                var t = [a("e345")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "设置密码",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_followEnterprise: {
                        comLoad: function (e) {
                            a.e("chunk-09d2ba7e").then(function () {
                                var t = [a("b2ff")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "关注企业号",
                            notNeedLogin: !0,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    appGroup: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-43a507d9")]).then(function () {
                                var t = [a("4d80")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "应用组",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_appGroup: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-36210c95")]).then(function () {
                                var t = [a("279a")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "应用组",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: ["js/wx/jweixin-1.3.2.js"]
                    },
                    m_downCenter: {
                        comLoad: function (e) {
                            a.e("chunk-2c9cbf7d").then(function () {
                                var t = [a("2446")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "下载中心",
                            notNeedLogin: !0,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_downloadSearch: {
                        comLoad: function (e) {
                            a.e("chunk-a6387a5a").then(function () {
                                var t = [a("77c0e")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "搜索",
                            notNeedLogin: !0,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_userIdentity: {
                        comLoad: function (e) {
                            a.e("chunk-d33ff21e").then(function () {
                                var t = [a("20a8")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "选择身份",
                            notNeedLogin: !0,
                            auth: ""
                        },
                        css: [],
                        js: []
                    }
                },
                form: {
                    editform: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-3e064585")]).then(function () {
                                var t = [a("af06")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "编辑表格",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    formpreview: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-42132f94")]).then(function () {
                                var t = [a("e143")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "表单预览",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    printPreviewPDF: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-25d5d63f")]).then(function () {
                                var t = [a("be3d")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "打印预览",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_formpreview: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-59d2d191")]).then(function () {
                                var t = [a("6bdd")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "手机预览",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    }
                },
                process: {
                    edit: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-773bef97"), a.e("chunk-a3f7ba9c")]).then(function () {
                                var t = [a("2194")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "编辑流程",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    }
                },
                matter: {
                    classifyInfo: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-59b7ffc8")]).then(function () {
                                var t = [a("0f00")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "分类管理",
                            notNeedLogin: !1,
                            auth: "AppClassifyManage"
                        },
                        css: [],
                        js: []
                    },
                    classifyInfoDetail: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-9c8a29d2")]).then(function () {
                                var t = [a("e5d2")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "分类详情",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    appGroup: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-394a284a")]).then(function () {
                                var t = [a("24242")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "应用组",
                            notNeedLogin: !1,
                            auth: "AppGroupManage"
                        },
                        css: [],
                        js: ["ueditor/ueditor.config.min.js", "ueditor/ueditor.all.min.js", "ueditor/lang/zh-cn/zh-cn.min.js"]
                    },
                    materialLibrary: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-57e6a106")]).then(function () {
                                var t = [a("cb59")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "素材库",
                            notNeedLogin: !1,
                            auth: "AppMaterialManage"
                        },
                        css: [],
                        js: []
                    },
                    list: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-82f932e8")]).then(function () {
                                var t = [a("42f8")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "我的事项",
                            notNeedLogin: !1,
                            auth: "AppManage"
                        },
                        css: [],
                        js: []
                    },
                    newmatter: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-773bef97"), a.e("chunk-72e7daef")]).then(function () {
                                var t = [a("e3f9")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "添加事项",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: ["ueditor/ueditor.config.min.js", "ueditor/ueditor.all.min.js", "ueditor/lang/zh-cn/zh-cn.min.js"]
                    },
                    matterbpmn: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-4fe55158")]).then(function () {
                                var t = [a("cee8")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "版本编辑",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    archivedata: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-785926d5")]).then(function () {
                                var t = [a("53ef")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "查看归档数据",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    archiveChart: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-7faeb13b")]).then(function () {
                                var t = [a("4e0b")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "图表统计",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: ["js/echarts.simple.min.js"]
                    },
                    evaluate: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-dde75352")]).then(function () {
                                var t = [a("e5d1")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "评价",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    detail: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-cd890f08")]).then(function () {
                                var t = [a("f342")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "服务详情",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    start: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-132ac30a")]).then(function () {
                                var t = [a("5dba")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "发起事项",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: ["ueditor/ueditor.config.min.js", "ueditor/ueditor.all.min.js", "ueditor/lang/zh-cn/zh-cn.min.js"]
                    },
                    startStep: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-3602d3fe")]).then(function () {
                                var t = [a("b4e1")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "发起事项",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: ["ueditor/ueditor.config.min.js", "ueditor/ueditor.all.min.js", "ueditor/lang/zh-cn/zh-cn.min.js"]
                    },
                    print: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-7361def8")]).then(function () {
                                var t = [a("4aaf")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "打印",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    qrcode: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-77a4fa48")]).then(function () {
                                var t = [a("71dc")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "打印",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    details: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-77a4fa48")]).then(function () {
                                var t = [a("71dc")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "详情查看",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    index: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-28b5551d")]).then(function () {
                                var t = [a("d8e3")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "我的事项",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    examine: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-ba45a5a2")]).then(function () {
                                var t = [a("2bb2")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "我的签批",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    rejectStep: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-9380fdd4")]).then(function () {
                                var t = [a("047b")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "修改",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_detail: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-751b3925")]).then(function () {
                                var t = [a("2a81")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "服务详情",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    sealcheckcode: {
                        comLoad: function (e) {
                            a.e("chunk-267e8b83").then(function () {
                                var t = [a("bcff")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "签章验证",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_start: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-19d4b719")]).then(function () {
                                var t = [a("78b1")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "发起事项",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_startStep: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-e98c2a56")]).then(function () {
                                var t = [a("abd5")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "发起事项",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_launch: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-e9f20a10"), a.e("chunk-483ecc60")]).then(function () {
                                var t = [a("c811")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "我的发起",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_launchSearch: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-e9f20a10"), a.e("chunk-b8515eb0")]).then(function () {
                                var t = [a("8aa5c")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "搜索",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_index: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-e9f20a10"), a.e("chunk-483ecc60"), a.e("chunk-5b9ea7b2")]).then(function () {
                                var t = [a("8ddb")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "我的任务",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_search: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-e9f20a10"), a.e("chunk-388c8778")]).then(function () {
                                var t = [a("8d29")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "搜索",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_examine: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-0d5bff33")]).then(function () {
                                var t = [a("7408")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "我的签批",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_rejectStep: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-222c0c97")]).then(function () {
                                var t = [a("57c7")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "我的签批",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    preview: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-25102708"), a.e("chunk-f7bf2820"), a.e("chunk-d1800290")]).then(function () {
                                var t = [a("77c3")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "预览表单",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    }
                },
                report: {
                    reportForm: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-46c92a3d")]).then(function () {
                                var t = [a("fa8b")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "报表设置",
                            notNeedLogin: !1,
                            auth: "ReportManage"
                        },
                        css: [],
                        js: []
                    },
                    newReport: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-4ec92e32")]).then(function () {
                                var t = [a("7ab8")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "新建报表",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    generalReportDetail: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-7f4715e0"), a.e("chunk-12603dc6"), a.e("chunk-9dedcf20")]).then(function () {
                                var t = [a("a5e8")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "报表详情",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    graphicReportDetail: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-7f4715e0"), a.e("chunk-12603dc6"), a.e("chunk-53c02af9")]).then(function () {
                                var t = [a("d652")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "报表详情",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: ["js/echarts.simple.min.js"]
                    },
                    threeGeneralReportDetail: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-7f4715e0"), a.e("chunk-96b515b0"), a.e("chunk-5d4c8547")]).then(function () {
                                var t = [a("8b49")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "报表详情",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    threeGraphicReportDetail: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-7f4715e0"), a.e("chunk-96b515b0"), a.e("chunk-1f1f3f5e")]).then(function () {
                                var t = [a("6c47")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "报表详情",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: ["js/echarts.simple.min.js"]
                    },
                    sorting: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-0a0940d2")]).then(function () {
                                var t = [a("d108")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "排序管理",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    index: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-3ec117f6")]).then(function () {
                                var t = [a("b9f3")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "数据中心",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    detail: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-7f4715e0"), a.e("chunk-06cfb6e6")]).then(function () {
                                var t = [a("4e95")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "我的数据",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: ["js/echarts.simple.min.js"]
                    },
                    print: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-fecb1c96"), a.e("chunk-7f4715e0"), a.e("chunk-4565e728")]).then(function () {
                                var t = [a("a876")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "打印",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: ["js/echarts.simple.min.js"]
                    },
                    m_index: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-31725419")]).then(function () {
                                var t = [a("c28b")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "数据中心",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_search: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-2f2ca2ce")]).then(function () {
                                var t = [a("341c")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "报表查询",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    m_detail: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-71985e58")]).then(function () {
                                var t = [a("bf774")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "报表详情",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: ["js/echarts.simple.min.js"]
                    }
                },
                user: {
                    userData: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-ac762624")]).then(function () {
                                var t = [a("4d6b")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "用户数据",
                            notNeedLogin: !1,
                            auth: "DepartManage"
                        },
                        css: [],
                        js: []
                    },
                    newuser: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-58f1df36")]).then(function () {
                                var t = [a("3a7a")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "新建用户",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    teamAdmin: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-5c8a8beb")]).then(function () {
                                var t = [a("92a8")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "标签管理",
                            notNeedLogin: !1,
                            auth: "TeamCategoryManage"
                        },
                        css: [],
                        js: []
                    },
                    departManage: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-85f1646a")]).then(function () {
                                var t = [a("2d21")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "部门管理",
                            notNeedLogin: !1,
                            auth: "DepartManage"
                        },
                        css: [],
                        js: []
                    },
                    postManage: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-57e3cc40")]).then(function () {
                                var t = [a("459d2")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "岗位管理",
                            notNeedLogin: !1,
                            auth: "JobManage"
                        },
                        css: [],
                        js: []
                    },
                    signManage: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-f532982c")]).then(function () {
                                var t = [a("e77e")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "公章管理",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    signatureRecord: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-5d2111d6")]).then(function () {
                                var t = [a("c0a5")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "个人签章记录",
                            notNeedLogin: !1,
                            auth: "SignManage"
                        },
                        css: [],
                        js: []
                    },
                    messageAuth: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-cc8775f0")]).then(function () {
                                var t = [a("0fa8")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "信息权限",
                            notNeedLogin: !1,
                            auth: "UserinfoAuthManage"
                        },
                        css: [],
                        js: []
                    }
                },
                backHome: {
                    index: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-89ce40fe")]).then(function () {
                                var t = [a("8a27")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "后台首页",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    message: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-7f923980")]).then(function () {
                                var t = [a("f1cf")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "站内通知",
                            notNeedLogin: !1,
                            auth: "SiteNoticeManage"
                        },
                        css: [],
                        js: []
                    },
                    newNotice: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-a36a538e")]).then(function () {
                                var t = [a("d731")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "新建通知",
                            notNeedLogin: !1,
                            auth: "SiteNoticeManage"
                        },
                        css: [],
                        js: ["ueditor/ueditor.config.js", "ueditor/ueditor.all.js", "ueditor/lang/zh-cn/zh-cn.js"]
                    },
                    siteConfig: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-b45af54e")]).then(function () {
                                var t = [a("2493")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "网站配置",
                            notNeedLogin: !1,
                            auth: "FrontEndManage"
                        },
                        css: [],
                        js: []
                    },
                    carousel: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-5912e734")]).then(function () {
                                var t = [a("0192")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "轮播图管理",
                            notNeedLogin: !1,
                            auth: "FrontEndManage"
                        },
                        css: [],
                        js: []
                    },
                    appManage: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-7ee05792")]).then(function () {
                                var t = [a("da24")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "应用管理",
                            notNeedLogin: !1,
                            auth: "FrontEndManage"
                        },
                        css: [],
                        js: []
                    },
                    comment: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-d2260cfa")]).then(function () {
                                var t = [a("1582")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "评价管理",
                            notNeedLogin: !1,
                            auth: "CommentManage"
                        },
                        css: [],
                        js: []
                    },
                    infoChannel: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-89c8313e")]).then(function () {
                                var t = [a("e95af")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "消息渠道管理",
                            notNeedLogin: !1,
                            auth: "MessageChannelManage"
                        },
                        css: [],
                        js: []
                    },
                    wordManage: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-d101f7ee")]).then(function () {
                                var t = [a("5912")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "敏感词管理",
                            notNeedLogin: !1,
                            auth: "SensitiveWordManage"
                        },
                        css: [],
                        js: []
                    },
                    companyManage: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-3a7e2760")]).then(function () {
                                var t = [a("4591")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "微信管理",
                            notNeedLogin: !1,
                            auth: "WechatManage"
                        },
                        css: [],
                        js: ["ueditor/ueditor.config.js", "ueditor/ueditor.all.js", "ueditor/lang/zh-cn/zh-cn.js"]
                    },
                    otherSer: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-1f7f9f18")]).then(function () {
                                var t = [a("97b9")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "第三方服务",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    backAuth: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-4888bb2e")]).then(function () {
                                var t = [a("c9af")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "后台权限",
                            notNeedLogin: !1,
                            auth: "super"
                        },
                        css: [],
                        js: []
                    },
                    statistic: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-d7b55714")]).then(function () {
                                var t = [a("151a")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "统计",
                            notNeedLogin: !1,
                            auth: "StatisticsManage"
                        },
                        css: [],
                        js: ["js/echarts.simple.min.js"]
                    },
                    admin: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-7575032e")]).then(function () {
                                var t = [a("240d")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "管理员",
                            notNeedLogin: !1,
                            auth: "super"
                        },
                        css: [],
                        js: []
                    },
                    systemConfig: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-03c1e51b")]).then(function () {
                                var t = [a("e1ff")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "系统配置",
                            notNeedLogin: !1,
                            auth: "SystemConfigManage"
                        },
                        css: [],
                        js: []
                    },
                    miniprogramConfig: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-795a3056")]).then(function () {
                                var t = [a("c0b0")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "小程序管理",
                            notNeedLogin: !1,
                            auth: "MiniProgramManage"
                        },
                        css: [],
                        js: []
                    },
                    fileConfig: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-25102708"), a.e("chunk-6b05f859")]).then(function () {
                                var t = [a("7e72")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "文件配置",
                            notNeedLogin: !1,
                            auth: "FileConfigManage"
                        },
                        css: [],
                        js: []
                    },
                    deploylog: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-4a6d8cf0")]).then(function () {
                                var t = [a("1eba")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "操作日志",
                            notNeedLogin: !1,
                            auth: "OperationLogManage"
                        },
                        css: [],
                        js: []
                    },
                    accredit: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-53b2b972")]).then(function () {
                                var t = [a("c8c5")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "授权",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    record: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-73d0c6bf")]).then(function () {
                                var t = [a("fb1b")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "授权记录",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    noneAuth: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-2d0b95da")]).then(function () {
                                var t = [a("3348")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "暂无权限",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    }
                },
                data: {
                    databaseSet: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-2d0b6e7a")]).then(function () {
                                var t = [a("1ec3")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "数据库设置",
                            notNeedLogin: !1,
                            auth: "DatabaseManage"
                        },
                        css: [],
                        js: []
                    },
                    dataSource: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-0f5c621f")]).then(function () {
                                var t = [a("8191")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "数据源设置",
                            notNeedLogin: !1,
                            auth: "DatabaseManage"
                        },
                        css: [],
                        js: []
                    },
                    promptSource: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-520a8c66")]).then(function () {
                                var t = [a("cad0")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "提示组件设置",
                            notNeedLogin: !1,
                            auth: "DatabaseManage"
                        },
                        css: [],
                        js: []
                    },
                    verificationSource: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-582f4b2a")]).then(function () {
                                var t = [a("f8a4")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "验证组件设置",
                            notNeedLogin: !1,
                            auth: "DatabaseManage"
                        },
                        css: [],
                        js: []
                    },
                    widgetSet: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-f48fd4fa")]).then(function () {
                                var t = [a("704c")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "控件规则设置",
                            notNeedLogin: !1,
                            auth: "DatabaseManage"
                        },
                        css: [],
                        js: []
                    },
                    firstMatter: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-1ad4b1ee")]).then(function () {
                                var t = [a("6ab5")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "前置事项条件",
                            notNeedLogin: !1,
                            auth: "DatabaseManage"
                        },
                        css: [],
                        js: []
                    },
                    trigger: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-6de5407c")]).then(function () {
                                var t = [a("deb5")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "监听器",
                            notNeedLogin: !1,
                            auth: "DatabaseManage"
                        },
                        css: [],
                        js: []
                    },
                    ocrAdmin: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-1865ea2a")]).then(function () {
                                var t = [a("d9a7")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "OCR管理",
                            notNeedLogin: !1,
                            auth: "DatabaseManage"
                        },
                        css: [],
                        js: []
                    },
                    timingTask: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-f47f9924")]).then(function () {
                                var t = [a("fa00")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "定时任务",
                            notNeedLogin: !1,
                            auth: "DatabaseManage"
                        },
                        css: [],
                        js: []
                    },
                    signal: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-31df845a")]).then(function () {
                                var t = [a("cc88")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "信号管理",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    }
                },
                info: {
                    auth: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-3d9d0e28")]).then(function () {
                                var t = [a("b361")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "信息权限",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    examine: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-cd91c9d4")]).then(function () {
                                var t = [a("817d")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "信息审核",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    },
                    query: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-c49a4b74"), a.e("chunk-2b9bd79e")]).then(function () {
                                var t = [a("4f9f")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "信息查询",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    }
                },
                nested: {},
                common: {
                    m_signature: {
                        comLoad: function (e) {
                            Promise.all([a.e("chunk-f7bf2820"), a.e("chunk-557638a0")]).then(function () {
                                var t = [a("5d6d")];
                                e.apply(null, t)
                            }
                                .bind(this)).catch(a.oe)
                        },
                        metaInfo: {
                            title: "手写签名",
                            notNeedLogin: !1,
                            auth: ""
                        },
                        css: [],
                        js: []
                    }
                }
            }
        },
        St = new yt(Lt);
        St.init = function () {
            var e = this.loadRouter();
            return this.beforeEnterModule(e),
            e
        },
        St.pcToMobile = function (e, t, a) {
            var n = t.matched && t.matched.length && t.matched[0];
            if (!n)
                return !1;
            var i = commonHelper.isWeixin().isPhone || window.innerWidth <= 640,
            s = n.path,
            o = -1 !== s.indexOf("m_"),
            c = appConfig.pcMobileChange;
            if (appConfig.onlyClient()) {
                var r = "mobile" == appConfig.onlyClient();
                i = r
            }
            if (i !== o) {
                var u = o ? "mobilePath" : "pcPath",
                d = o ? "pcPath" : "mobilePath",
                l = !1;
                c.forEach((function (n) {
                        if (n[u] == s) {
                            switch (a(), n.type) {
                            case 1:
                                e.replace({
                                    path: n[d],
                                    query: t.query
                                });
                                break;
                            case 2:
                                n.changeFunc(e, n[d], t);
                                break
                            }
                            l = !0
                        }
                    }))
            }
            return l
        },
        St.setMobileRem = function (e) {
            var t = e.matched && e.matched.length && e.matched[0];
            if (!t)
                return !1;
            window.removeEventListener("resize", this.changSize),
            -1 !== t.path.indexOf("m_") ? (this.changSize(), window.addEventListener("resize", this.changSize, !1)) : document.documentElement.style.fontSize = ""
        },
        St.changSize = function () {
            var e = document.documentElement.clientWidth;
            e = e <= 480 ? e : 480,
            e = e >= 320 ? e : 320,
            document.documentElement.style.fontSize = 100 * e / 375 + "px"
        },
        St.beforeEnterModule = function (e) {
            var t = this;
            e.beforeEach((function (a, n, i) {
                    if (a.meta.notNeedLogin || kt["a"].checkLogin()) {
                        if (t.pcToMobile(e, a, i))
                            return !1;
                        vt["a"].deleteAll(),
                        vt["a"].add(a.query, "url"),
                        t.setMobileRem(a),
                        kt["a"].setSiteConfig((function () {
                                a.meta.auth && !kt["a"].queryControl(a.meta.auth) && e.replace({
                                    path: "/backHome/noneAuth"
                                }),
                                i()
                            }))
                    } else
                        kt["a"].toLogin()
                })),
            e.afterEach((function (e) {
                    n["default"].prototype.appCommonH.postTimeLine(3),
                    "pku" === commonHelper.getWebId() && window.webkit && window.webkit.messageHandlers.enterDetailWebView.postMessage(appConfig.baseUrl + e.fullPath.substr(1))
                }))
        };
        var wt,
        jt,
        It,
        Ct = St,
        Pt = a("2f62"),
        Tt = (a("d3b7"), a("ddb0"), a("ade3")),
        Nt = "SET_ALLPLUGINS",
        _t = "ADD_STARTLOADING",
        xt = "REDUCE_STARTLOADING",
        Dt = "SET_ALLPRINTMAKE",
        At = "SET_PRINTMAKE",
        Ot = "DEL_PRINTMAKE",
        Et = "SET_PRIMARYUID",
        Mt = "SET_STARTERDEPARID",
        Rt = "SET_ISPRINTMAKE",
        Ut = "SET_TABLEPAGEINFO",
        Ft = "SET_PRINTSTYLE",
        Bt = "SET_FORMLOADED",
        Ht = "ADD_WARNING",
        Kt = "CLEAR_WARNING",
        $t = "SET_CHILDTABLE",
        qt = "CHILDDATASOURCE",
        Wt = "CHILDNOCANSOURCE",
        Jt = "CHILDNOCANSOURCEKEYS",
        Gt = "REPEAT_OPERATIONALERT",
        zt = "SET_SELECTTD",
        Vt = "REFRESH_RTABLE",
        Yt = "SET_FORMSTATUS",
        Xt = "REFRESH_DATASOURCE",
        Qt = "RETABLE_IDS",
        Zt = "SET_SORT",
        ea = (wt = {}, Object(Tt["a"])(wt, Nt, (function (e, t) {
                    var a = t.id ? t.id : "0";
                    n["default"].set(e.allplugin, a, t.allplugin)
                })), Object(Tt["a"])(wt, _t, (function (e) {
                    e.matterLoading++
                })), Object(Tt["a"])(wt, xt, (function (e) {
                    e.matterLoading--
                })), Object(Tt["a"])(wt, Dt, (function (e, t) {
                    var a = t.fid ? t.fid : 0;
                    n["default"].set(e.repeatPrintInfo, a, t.data)
                })), Object(Tt["a"])(wt, At, (function (e, t) {
                    var a = t.fid ? t.fid : 0,
                    i = t.tid ? t.tid : 0,
                    s = t.trid ? t.trid : 0;
                    e.repeatPrintInfo[a] || n["default"].set(e.repeatPrintInfo, a, {}),
                    e.repeatPrintInfo[a][i] || n["default"].set(e.repeatPrintInfo[a], i, {}),
                    n["default"].set(e.repeatPrintInfo[a][i], s, t.data)
                })), Object(Tt["a"])(wt, Ot, (function (e, t) {
                    var a = t.fid ? t.fid : 0,
                    i = t.tid ? t.tid : 0,
                    s = t.trid ? t.trid : 0;
                    if (!e.repeatPrintInfo[a] || !e.repeatPrintInfo[a][i])
                        return !1;
                    n["default"].delete(e.repeatPrintInfo[a][i], s)
                })), Object(Tt["a"])(wt, Et, (function (e, t) {
                    e.primaryUid = t.uid
                })), Object(Tt["a"])(wt, Mt, (function (e, t) {
                    e.starterDepartId = t.starterDepartId
                })), Object(Tt["a"])(wt, Rt, (function (e, t) {
                    e.isPrintMake = t.isPrintMake
                })), Object(Tt["a"])(wt, Ut, (function (e, t) {
                    var a = t.fid ? t.fid : "0";
                    n["default"].set(e.tablePageInfo, a, t.data)
                })), Object(Tt["a"])(wt, Ft, (function (e, t) {
                    var a = t.fid ? t.fid : "0";
                    n["default"].set(e.printStyle, a, t.data)
                })), Object(Tt["a"])(wt, Bt, (function (e, t) {
                    var a = t.fid ? t.fid : "0";
                    n["default"].set(e.formLoaded, a, t.status)
                })), Object(Tt["a"])(wt, Ht, (function (e, t) {
                    e.warningErrors.push(t)
                })), Object(Tt["a"])(wt, Kt, (function (e, t) {
                    e.warningErrors = []
                })), Object(Tt["a"])(wt, $t, (function (e, t) {
                    e.childTable = t
                })), Object(Tt["a"])(wt, qt, (function (e, t) {
                    n["default"].set(e.childDataSource, t.fid, t.params)
                })), Object(Tt["a"])(wt, Wt, (function (e, t) {
                    n["default"].set(e.childNoCanSource, t.fid, t.ids)
                })), Object(Tt["a"])(wt, Jt, (function (e, t) {
                    n["default"].set(e.childNoCanSourceKeys, t.fid, t.keys)
                })), Object(Tt["a"])(wt, Gt, (function (e, t) {
                    e.repeatOperationAlert = t
                })), Object(Tt["a"])(wt, zt, (function (e, t) {
                    var a = {};
                    for (var n in e.selectData)
                        a[n] = t[n] ? t[n] : e.selectData[n];
                    e.selectData = a
                })), Object(Tt["a"])(wt, Vt, (function (e, t) {
                    n["default"].set(e.refreshRTable, t.fid, t.params)
                })), Object(Tt["a"])(wt, Yt, (function (e, t) {
                    n["default"].set(e.formStatus, t.fid, t)
                })), Object(Tt["a"])(wt, Xt, (function (e, t) {
                    n["default"].set(e.refreshDataSource, t.fid, t.params)
                })), Object(Tt["a"])(wt, Qt, (function (e, t) {
                    var a = {};
                    a[t.key] = t.params,
                    n["default"].set(e.retableIds, t.fid, a)
                })), Object(Tt["a"])(wt, Zt, (function (e, t) {
                    var a = {};
                    a[t.key] = t.data,
                    n["default"].set(e.setSortInfo, t.fid, a)
                })), wt),
        ta = (a("a15b"), a("2532"), {
            toReduceStartLoading: function (e) {
                setTimeout((function () {
                        e.state.matterLoading > 0 && e.commit("REDUCE_STARTLOADING")
                    }), 300)
            },
            initFormStatus: function (e, t) {
                var a = {
                    fid: t.fid,
                    status: 1,
                    initSourceList: [],
                    usedSourceList: []
                };
                for (var n in t.plugins) {
                    var i = t.plugins[n];
                    1 == i.classtype && "dDataSource" == i.type && (i.attr.data.runStatus.includes(1) && a.initSourceList.push(i.key))
                }
                a.status = a.initSourceList.length ? 1 : 2,
                e.commit("SET_FORMSTATUS", a)
            },
            formSourceRun: function (e, t) {
                var a = e.state.formStatus[t.fid];
                if (!a.initSourceList.includes(t.sourceKey) || 2 == a.status)
                    return !1;
                a.usedSourceList.includes(t.sourceKey) || a.usedSourceList.push(t.sourceKey),
                a.usedSourceList.sort().join("_") == a.initSourceList.sort().join("_") && (a.status = 2),
                e.commit("SET_FORMSTATUS", a)
            },
            onlySetFormStatus: function (e, t) {
                var a = e.state.formStatus[t.fid];
                a.status = t.status,
                e.commit("SET_FORMSTATUS", a)
            }
        }),
        aa = {
            namespaced: !0,
            state: function () {
                return {
                    allplugin: {},
                    matterLoading: 0,
                    isPrintMake: !1,
                    repeatPrintInfo: {},
                    tablePageInfo: {},
                    printStyle: {},
                    formLoaded: {},
                    warningErrors: [],
                    childTable: {},
                    childDataSource: {},
                    childNoCanSource: {},
                    childNoCanSourceKeys: {},
                    repeatOperationAlert: {},
                    selectData: {
                        tableid: "",
                        start: {
                            id: "",
                            row: 0,
                            col: 0
                        },
                        end: {
                            id: "",
                            row: 0,
                            col: 0
                        },
                        selectIds: []
                    },
                    refreshRTable: {},
                    formStatus: {},
                    refreshDataSource: {},
                    retableIds: {},
                    setSortInfo: {}
                }
            },
            mutations: ea,
            actions: ta
        },
        na = "UPDATA_SAVEDATA",
        ia = "UPDATE_NODEID",
        sa = "UPDATE_FORMS",
        oa = "UPDATE_EVARLIST",
        ca = "UPDATE_FORMSHELPER",
        ra = "UPDATE_EVARLISTHELPER",
        ua = (jt = {}, Object(Tt["a"])(jt, na, (function (e, t) {
                    e.saveData = t
                })), Object(Tt["a"])(jt, ia, (function (e, t) {
                    e.currNodeId = t
                })), Object(Tt["a"])(jt, sa, (function (e, t) {
                    e.forms = t
                })), Object(Tt["a"])(jt, oa, (function (e, t) {
                    e.evarList = t
                })), Object(Tt["a"])(jt, ca, (function (e, t) {
                    e.formsHelper = t
                })), Object(Tt["a"])(jt, ra, (function (e, t) {
                    e.evarHelper = t
                })), jt),
        da = {
            namespaced: !0,
            state: function () {
                return {
                    saveData: {},
                    forms: {},
                    currNodeId: "",
                    evarList: [],
                    formsHelper: [],
                    evarHelper: []
                }
            },
            mutations: ua
        },
        la = {
            SET_NODEDATAS: function (e, t) {
                e.nodeDatas = t
            },
            SET_SELECTUIDS: function (e, t) {
                e.selectNodeUid = t
            },
            SET_SMSSEND: function (e, t) {
                e.sms_send = t
            },
            My_TAST: function (e, t) {
                e.task = t
            },
            My_SPONSOR: function (e, t) {
                e.sponsor = t
            },
            SET_AGENT_INFO: function (e, t) {
                e.agent_info = t
            },
            CLEAR_AGENT_INFO: function (e, t) {
                e.agent_info = {}
            },
            FORM_MATTER: function (e, t) {
                n["default"].set(e.formMatter, t.type, t.data)
            }
        },
        fa = {
            clearUserSelectInfo: function (e) {
                e.commit("SET_NODEDATAS", []),
                e.commit("SET_SELECTUIDS", {}),
                e.commit("SET_SMSSEND", 0)
            }
        },
        ha = {
            namespaced: !0,
            state: function () {
                return {
                    nodeDatas: [],
                    selectNodeUid: {},
                    sms_send: {},
                    sponsor: "",
                    task: "",
                    agent_info: {},
                    formMatter: {
                        startWait: ""
                    }
                }
            },
            mutations: la,
            actions: fa
        },
        pa = "UPDATA_GRANTMELISTS",
        ma = "UPDATE_SHOWDATACENTER",
        ba = (It = {}, Object(Tt["a"])(It, pa, (function (e, t) {
                    e.grantMeLists = t
                })), Object(Tt["a"])(It, ma, (function (e, t) {
                    e.showDataCenter = t
                })), It),
        ga = {
            namespaced: !0,
            state: function () {
                return {
                    grantMeLists: null,
                    showDataCenter: null
                }
            },
            mutations: ba
        };
        n["default"].use(Pt["a"]);
        var ya = new Pt["a"].Store({
                modules: {
                    form: aa,
                    process: da,
                    matter: ha,
                    common: ga
                }
            });
        var ka = ya,
        va = (a("0d0f"), function () {
            var e = this,
            t = e.$createElement,
            a = e._self._c || t;
            return a("router-view")
        }),
        La = [],
        Sa = a("d4ec"),
        wa = a("bee2"),
        ja = function () {
            function e(t) {
                Object(Sa["a"])(this, e),
                this.oDiv = document.querySelector(t),
                this.disX = 0,
                this.disY = 0,
                this.init()
            }
            return Object(wa["a"])(e, [{
                        key: "init",
                        value: function () {
                            this.oDiv.addEventListener("touchstart", function (e) {
                                var t = e.targetTouches[0];
                                this.disX = t.clientX - this.oDiv.offsetLeft,
                                this.disY = t.clientY - this.oDiv.offsetTop,
                                this.oDiv.addEventListener("touchmove", this.Fntouchmove.bind(this)),
                                this.oDiv.addEventListener("touchend", function (e) {
                                    this.oDiv.removeEventListener("touchmove", this.Fntouchmove)
                                }
                                    .bind(this))
                            }
                                .bind(this))
                        }
                    }, {
                        key: "Fntouchmove",
                        value: function (e) {
                            e.preventDefault();
                            var t = e.targetTouches[0],
                            a = t.clientX - this.disX,
                            n = t.clientY - this.disY,
                            i = $(window).width() - $(this.oDiv).outerHeight(!0),
                            s = $(window).height() - $(this.oDiv).outerHeight(!0);
                            a > 0 && a < i && (this.oDiv.style.left = a + "px"),
                            n > 0 && n < s && (this.oDiv.style.top = n + "px")
                        }
                    }
                ]),
            e
        }
        (),
        Ia = function () {
            function e(t) {
                Object(Sa["a"])(this, e),
                this.ua = navigator.userAgent,
                this.isAndroid = -1 !== this.ua.indexOf("Android") || -1 !== this.ua.indexOf("Adr"),
                this.iswx = -1 !== this.ua.toLowerCase().indexOf("micromessenger"),
                this.isMiniprogram = "miniprogram" === window.__wxjs_environment,
                this.path = "",
                this.showReturnBtnPaths = t
            }
            return Object(wa["a"])(e, [{
                        key: "initReturnBtn",
                        value: function () {
                            this.isAndroid && this.iswx && !this.isMiniprogram && (this.removeReturnBtn(), this.showReturnBtnPaths.includes(this.path) && (window.history.length > 1 || document.referrer) && (this.createReturnBtn(), new ja("#android_retrun_btn"), this.return()))
                        }
                    }, {
                        key: "createReturnBtn",
                        value: function () {
                            if (!$("#android_retrun_btn").length) {
                                var e = $("<div>返回</div>").attr({
                                        id: "android_retrun_btn"
                                    });
                                e.appendTo("body")
                            }
                        }
                    }, {
                        key: "removeReturnBtn",
                        value: function () {
                            $("#android_retrun_btn").remove()
                        }
                    }, {
                        key: "return",
                        value: function () {
                            $("body").on("click", "#android_retrun_btn", (function () {
                                    window.history.length > 1 ? window.history.go(-1) : location.href = document.referrer
                                }))
                        }
                    }
                ]),
            e
        }
        (),
        Ca = function () {
            function e() {
                Object(Sa["a"])(this, e)
            }
            return Object(wa["a"])(e, [{
                        key: "init",
                        value: function () {
                            kt["a"].checkLogin() && this.createrEle()
                        }
                    }, {
                        key: "createrEle",
                        value: function () {
                            this.removeEle();
                            var e = "";
                            document.cookie && (e = document.cookie.split("=")[1]);
                            var t = $("<img />").attr({
                                    id: "visits_collect",
                                    src: "".concat(appConfig.apiBaseUrl, "/api/visits/collect?agent=").concat(location.href.includes("m_") ? "mobile" : "pc", "&uid=").concat(e),
                                    style: "display: none;"
                                });
                            t.appendTo("body")
                        }
                    }, {
                        key: "removeEle",
                        value: function () {
                            $("#visits_collect").remove()
                        }
                    }
                ]),
            e
        }
        (),
        Pa = Ca,
        Ta = {
            data: function () {
                return {
                    showReturnBtnPaths: ["/site/m_search", "/site/m_message", "/site/m_changeInfo", "/site/m_addapp", "/matter/m_detail", "/matter/m_start", "/matter/m_startStep", "/matter/m_examine", "/matter/m_rejectStep", "/matter/m_launchSearch", "/matter/m_search", "/report/m_detail", "/report/m_search"],
                    androidReturnBtn: null,
                    visitsCollect: null
                }
            },
            created: function () {
                this.androidReturnBtn = new Ia(this.showReturnBtnPaths),
                this.visitsCollect = new Pa
            },
            updated: function () {
                this.androidReturnBtn.path = this.$route.path,
                this.androidReturnBtn.initReturnBtn(),
                this.visitsCollect.init()
            }
        },
        Na = Ta,
        _a = a("c701"),
        xa = Object(_a["a"])(Na, va, La, !1, null, null, null),
        Da = xa.exports;
        window.Vue = n["default"],
        window.$ = window.jQuery = f.a,
        window.EventSource = rt["NativeEventSource"] || rt["EventSourcePolyfill"],
        window.commonHelper = ut["a"];
        var Aa = Ct.init();
        n["default"].prototype.appRouter = Aa,
        n["default"].prototype.appStore = ka,
        new n["default"]({
            router: Aa,
            store: ka,
            i18n: ct,
            render: function (e) {
                return e(Da)
            }
        }).$mount("#app")
    },
    6128: function (e, t, a) {
        "use strict";
        a.d(t, "a", (function () {
                return d
            }));
        a("c975"),
        a("d3b7"),
        a("ac1f"),
        a("5319");
        var n = a("5530"),
        i = a("a026"),
        s = a("bc3a"),
        o = a.n(s),
        c = a("1d8b"),
        r = a("4328"),
        u = function (e, t) {
            try {
                e = e.replace(appConfig.apiBaseUrl, ""),
                i["default"].prototype.appCommonH.postTimeLine(1, {
                    api: e.replace(appConfig.apiBaseUrl, ""),
                    useTime: (new Date).getTime() - t
                })
            } catch (a) {}
        },
        d = function (e, t, a) {
            var s = e.url;
            if (void 0 === e)
                return console.error("必须传递参数"), !1;
            e.url.toLocaleLowerCase().indexOf("http") < 0 && (e.url = c["a"].getApi(e.url)),
            e.withCredentials = !0;
            var d = {
                "Content-Type": "application/x-www-form-urlencoded"
            };
            -1 === window.location.href.indexOf("local.") && (d["X-Requested-With"] = "XMLHttpRequest"),
            e.headers ? e.headers = Object(n["a"])(Object(n["a"])({}, d), e.headers) : e.headers = d,
            e.data = Object(n["a"])(Object(n["a"])({}, e.data), i["default"].prototype.appCommonH.getAgentInfo(i["default"].prototype.appStore.state.matter.agent_info)),
            "get" == e.method.toLowerCase() && (e.params = e.data, delete e.data),
            e.data && (e.data = r.stringify(e.data));
            var l = (new Date).getTime();
            return new Promise((function (n, c) {
                    o()(e).then((function (a) {
                            u(e.url, l),
                            i["default"].prototype.appCommonH.openDebug() && alert(e.url + ":" + JSON.stringify(a));
                            var s = a.data || {};
                            s.e = +s.e,
                            10042 != s.e ? 10044 == s.e ? i["default"].prototype.$message({
                                type: "error",
                                message: s.m,
                                showClose: !0
                            }) : (t && t(a.data), n(a.data)) : i["default"].prototype.authH.toLogin()
                        })).catch((function (t) {
                            u(e.url, l),
                            console.error(t, "API " + s),
                            a && a("数据请求失败，请重新进入页面或点击按钮"),
                            c(t)
                        }))
                }))
        };
        i["default"].prototype.appFetch = d
    },
    6367: function (e, t, a) {
        "use strict";
        a("4160"),
        a("ac1f"),
        a("1276"),
        a("159b");
        var n = a("5530"),
        i = a("a026"),
        s = a("6128"),
        o = {
            _varKey: "$EVN",
            formCallbacks: [],
            getMatterEd: !1,
            init: function () {
                window[this._varKey] || (window[this._varKey] = {})
            },
            add: function (e, t) {
                var a = {};
                for (var i in e)
                    a[t + "_" + i] = e[i];
                this.deleteByDimension(t),
                window[this._varKey] = Object(n["a"])(Object(n["a"])({}, window[this._varKey]), a)
            },
            get: function (e) {
                var t = e.split(".");
                return t[0] !== this._varKey ? e : window[this._varKey] && window[this._varKey][t[1]] ? 3 == t.length ? window[this._varKey][t[1]][t[2]] : window[this._varKey][t[1]] : ""
            },
            delete : function (e) {
                window[this._varKey] && window[this._varKey][e] && delete window[this._varKey][e]
            },
            deleteByDimension: function (e) {
                for (var t in window[this._varKey])
                    t.split(0, 4) == e + "_" && this.delete(t)
            },
            getMatterEvn: function (e, t) {
                var a = this;
                this.getMatterEd ? t() : this.formCallbacks.push(t),
                1 == this.formCallbacks.length && Object(s["a"])({
                    url: "getMatterEvn",
                    method: "get",
                    data: {
                        app_id: e.appId,
                        inst_id: e.instId,
                        task_id: e.taskId,
                        sess_id: e.sessId
                    }
                }, (function (e) {
                        if (a.getMatterEd = !0, 0 == e.e) {
                            var t = {};
                            for (var n in e.d)
                                t[e.d[n].key] = e.d[n].value;
                            a.add(t, "matter")
                        } else
                            console.error("获取事项环境变量失败：" + e.m);
                        a.formCallbacks.forEach((function (e) {
                                e()
                            })),
                        a.formCallbacks = []
                    }), (function () {
                        a.getMatterEd = !0,
                        a.formCallbacks.forEach((function (e) {
                                e()
                            })),
                        a.formCallbacks = [],
                        console.error("获取事项环境变量失败")
                    }))
            },
            deleteAll: function () {
                this.getMatterEd = !1,
                this.formCallbacks = [],
                window[this._varKey] = {}
            },
            deleteOtherUrl: function () {
                var e = {};
                for (var t in window[this._varKey])
                    "url" === t.split("_")[0] && (e[t] = window[this._varKey][t]);
                this.getMatterEd = !1,
                this.formCallbacks = [],
                window[this._varKey] = e
            }
        };
        o.init(),
        i["default"].prototype.evnHelper = o,
        t["a"] = o
    },
    9403: function (e, t, a) {
        "use strict";
        var n = a("a026"),
        i = {
            toPdfType: function (e) {
                var t = this.getConfig("isToPdf");
                return t[e] ? t[e] : t["default"]
            },
            getConfig: function (e) {
                return !(!appConfig.customConfig || !appConfig.customConfig[e]) && appConfig.customConfig[e]
            },
            getConfigId: function (e, t) {
                var a = this.getConfig(e);
                return a[t] ? a[t] : a["default"]
            }
        };
        n["default"].prototype.customHelper = i,
        t["a"] = i
    },
    a4d9: function (e, t, a) {
        var n,
        i = a("9523");
        e.exports = (n = {
                webId: "ncepu",
                login: "",
                logout: "/site/login/cas-logout",
                userKeyPrefix: "ncepu",
                version: "1.0",
                env: "product",
                evnWebid: "ncepu",
                sourceV: 1606826045648,
                customConfig: {
                    ucenterPath: {
                    default:
                        "me.ncepu.edu.cn"
                    }
                }
            }, i(n, "sourceV", 1606826045648), i(n, "onlyClient", (function () {
                    return !1
                })), n)
    },
    e425: function (e, t) {
        e.exports = {
            login: "/site/login/login",
            loginCode: "/site/login/code",
            logout: "/site/login/logout",
            GetOauthCode: "/open/connection/get-code",
            banners: "/api/home/get-banners",
            getNewApps: "/api/home/new-apps",
            getMessageLists: "/site/message/lists",
            addMyApps: "/site/user/add-my-apps",
            sitmessageread: "/site/message/read",
            thirdClickNum: "/site/apps/click-num",
            appSearch: "/api/home/app-search",
            printerHelpL: "/api/apps/printer-help",
            notificationdetail: "/site/notification/detail",
            notificationid: "/site/notification/type-index",
            SSDeparCount: "/site/statistics/department-count",
            SSServiceCount: "/site/statistics/service-count",
            recentappssave: "/site/apps/recent-apps-save",
            siteLastApps: "/site/apps/last-apps",
            siteAllList: "/site/apps/list",
            getAppDetail: "/api/apps/detail",
            myApps: "/site/user/my-apps",
            getProcessInfoNew: "/site/process/start-info",
            sitmessagelist: "/site/message/lists",
            sitmessagedel: "/site/message/delete",
            sealConfig: "/site/seal/seal-config",
            sealSetPwd: "/site/seal/set-seal-password",
            sealUserInfo: "/site/seal/user-info",
            sealInfo: "/site/seal/get-personal-seal",
            addSeal: "/site/seal/add-seal",
            personOfficialSealListnew: "/site/seal/my-office-seal",
            sealUpdateSeal: "/site/seal/update-seal",
            sealChangeImagenew: "/site/seal/set-personal-seal",
            signInfo: "/site/seal/sign-info",
            sealHistory: "/site/seal/seal-history",
            signChangeImage: "/site/seal/change-sign-image",
            addSign: "/site/seal/add-sign",
            getgrantlists: "/site/grant-account/lists",
            savegrantlists: "/site/grant-account/save",
            delgrantlists: "/site/grant-account/delete",
            sitesearchuser: "/site/user/search-user",
            addScientificUser: "/site/bupt/scientific-user-add",
            scientificUserList: "/site/bupt/scientific-user-list",
            scientificUserDel: "/site/bupt/scientific-user-delete",
            entrustList: "/site/agent-deal/list",
            newEntrust: "/site/agent-deal/add",
            changeEntruststate: "/site/agent-deal/change-status",
            getonceEntrust: "/site/agent-deal/get",
            deleteEntrust: "/site/agent-deal/delete",
            changeEntrust: "/site/agent-deal/edit",
            dowmloadCenter: "/site/download-centre/list",
            downloadRest: "/site/download-centre/rest-export",
            getDownloadFile: "/site/download-centre/verify-file-size",
            getAgentList: "/site/user/agent-list",
            saveAgent: "/site/user/save-agent",
            agentInfo: "/site/user/agent-info",
            changeAgentStatus: "/site/user/change-agent-status",
            delAgent: "/site/user/del-agent",
            hasAgent: "/site/user/has-agent",
            agentApp: "/site/user/agent-app",
            agentAuth: "/site/process/agent-set",
            renewuserInfo: "/site/user/infov",
            reuserssavev: "/site/user/savev",
            reinfoconfig: "/site/user/info-config",
            reusersdepartv: "/api/user/departv",
            reuserdictionary: "/api/user/dictionary",
            resiteexnotice: "/site/user/examine-notice",
            reuseridentify: "/system/user/identify",
            reusercancelidentify: "/system/user/cancel-identify",
            redelusertable: "/site/user/del-user-info",
            reuserapprover: "/system/user/approver",
            reusersimportmy: "/site/user/import-my",
            validate_pass: "/site/user/validate-password",
            repassword: "/site/user/repassword",
            update_mobile: "/site/user/update-mobile",
            validate_code: "/site/message/sms",
            myDataTags: "/site/user/my-data-tags",
            tableconfig: "/site/user/center-config",
            agreepromise: "/site/user/agree-promise",
            getJob: "/site/job/depart-job",
            allDepartment: "/api/user/departv",
            outsideLogin: "/site/login/outside-login",
            checkMoblie: "/site/login/check-mobile",
            resetPassword: "/site/login/reset-password",
            loginSendCode: "/site/login/send",
            forceResetpwd: "/site/login/force-resetpwd",
            getUserCode: "/site/tools/get-usercode",
            personalCenInfo: "/site/personal-center/info",
            personalCenEdit: "/site/personal-center/edit",
            backGetAuth: "/system/personal-center/get-auth",
            backUpdateAuth: "/system/personal-center/updata-auth ",
            siteGetFolder: "/site/apps/folder",
            personalPassword: "/site/personal-center/reset-password",
            formLists: "/site/form/lists",
            toPdf: "/pdf-server/index",
            getToPdfStatus: "/pdf-server/status",
            cloneForm: "/system/form/clone",
            getBpmnFormList: "/system/bpmn/all",
            getDataByExeclPath: "/site/tools/excel-parse",
            repeatFile: "/api/upload/zip-file",
            savePrintInfo: "/site/form/save-preview",
            saveFormDraft: "/site/form/save-form-data-draft",
            codeGetForm: "/api/form/get-form",
            getFromMode: "/site/form/get-formv",
            getFormOneDetail: "/site/form/detail",
            saveFormAttr: "/system/form/save-attributes",
            updateFormModel: "/system/form/modify",
            createFormModel: "/system/form/create",
            createNewForm: "/system/form/create",
            getChildTableData: "/site/process/child-table-data",
            goodList: "/site/goods/lists",
            getMatterEvn: "/site/process/variables",
            getnoticeList: "/system/form-notice/list",
            getBindColumn: "/site/data/bind-api-list",
            getDataSourceList: "/site/data-source/all",
            getColumnMap: "/site/data-source/dictionary",
            vBpmnFormList: "/system/bpmn/list-form",
            fBpmnCom: "/system/form/get-components",
            departSeal: "/system/department/depart-seal",
            bpmnSearchForm: "/system/form/search-app",
            getRelation: "/api/user/relation",
            searchUserRelation: "/site/user/user-search-range",
            getvalidatorList: "/system/form-validator/list",
            getnoticeDetail: "/site/form-notice/detail",
            searchBindInfo: "/site/data/bind-data",
            searchCountry: "/api/country/search",
            getDataSourceData: "/site/data-source/detail",
            getUserbefore: "/site/user/search-user",
            allJob: "/site/job/all",
            allTeam: "/site/user/team",
            getPdfSeal: "/site/seal/pdf-seal",
            goodDetail: "/site/goods/detail",
            formFee: "/site/form-pay/form-fee",
            getOrder: "/site/form-pay/get-order",
            getinstIdOrder: "/site/form-pay/get-form-order",
            getProjectnumber: "/site/activiti/project-number",
            region: "/api/dictionary/province",
            roomAllList: "/site/pku-room/select-room-name",
            getRoom: "/site/pku-room/get-room-list",
            getDetailRoom: "/site/pku-room/get-room-list-by-id",
            mySeal: "/site/seal/my-office-seal",
            processSubmit: "/site/process/submit",
            searchUserPlugin: "/site/user/form-search-user",
            uploadindex: "/api/upload/index",
            checkChild: "/site/process/check-child-table",
            getOcrApi: "/system/ocr/all",
            getOcrApiDetail: "/system/ocr/detail",
            getOcrData: "/site/ocr/get-data",
            baseupload: "/api/upload/base-upload",
            fsBpmnCom: "/system/form/multi-components",
            getSystemVar: "/system/bpmn/user-variables",
            getProcessDefinition: "/system/bpmn/get-bpmn-infov",
            listTrigger: "/system/trigger/list",
            saveBpmnAttribute: "/system/bpmn/save-attributes",
            saveBpmn: "/system/bpmn/save",
            bpmnGetUser: "/system/user/simple-search",
            getSignal: "/system/activiti-signal/app-get-signal",
            tagsTag: "/system/tags/tags",
            saveTag: "/system/tags/save",
            publishTag: "/system/tags/publish",
            deleteTag: "/system/tags/delete",
            sortTag: "/system/tags/sort",
            searchTag: "/system/tags/list-app",
            getagList: "/system/tags/tag-list",
            setTagMatter: "/system/app/set-tag",
            sortTagApp: "/system/tags/sort-app",
            deleteMatterApp: "/system/tags/delete-app",
            addTagApp: "/system/tags/add-app",
            getApp: "/system/app-folder/index",
            saveApp: "/system/app-folder/save",
            publishApp: "/system/app-folder/publish",
            deleteApp: "/system/app-folder/delete",
            moveApp: "/system/app-folder/move",
            delMaterial: "/system/material-picture/delete",
            addMaterial: "/system/material-picture/save",
            saveMaterialClassify: "/system/material-classification/save",
            delMaterialClassify: "/system/material-classification/delete",
            prefixList: "/system/prefix/index",
            getIdentity: "/site/identity/index",
            getCommentConf: "/system/comment-manage/index",
            getFormMatterList: "/system/form/version-list",
            saveMatterBase: "/system/app/save-base",
            getmatterDetail: "/system/app/detail",
            appVersionList: "/system/bpmn/list",
            createAppVerion: "/system/bpmn/create-version",
            bpmnSaveForm: "/system/bpmn/save-form",
            bpmnAppDetail: "/system/bpmn/detail",
            bpmnClone: "/system/bpmn/clone",
            publishBpmn: "/system/bpmn/publish",
            bpmnSaveTask: "/system/bpmn/save-task",
            getTriggerList: "/system/trigger/app-get-trigger",
            moveTag: "/system/app/set-tag",
            publishMatter: "/system/app/publish",
            unpublishMatter: "/system/app/unpublish",
            getEventSource: "/system/bpmn/source-key",
            getFormAuth: "/system/form/get-form-auth",
            enableForm: "/system/form/enable-version",
            saveSelectForms: "/system/form/save-select",
            setFormAuth: "/system/form/save-form-auth",
            getFormTip: "/system/form/get-form-tip",
            upsataFormTip: "/system/form/update-form-tip",
            formSaveHide: "/system/form/save-hide",
            formSaveNote: "/system/form/save-note",
            bpmnSaveeHide: "/system/bpmn/save-hide",
            bpmnSaveNote: "/system/bpmn/save-note",
            appHide: "/system/app/hide",
            newGetArchive: "/site/archive/query",
            newArchiveFormCom: "/site/archive/form-components",
            newdelArchive: "/site/archive/delete-archive",
            recentExportRecord: "/site/archive/recent-export-record",
            pollingStatus: "/site/archive/polling-state",
            exportToExcel: "/site/archive/query-to-excel",
            exportToAttach: "/site/archive/attach-export",
            tongjiArchive: "/site/archive/tongji",
            getCommentsList: "/system/comments/lists",
            myStarted: "/site/process/inst-list",
            getMyTodo: "/site/process/my-todo",
            getMyRead: "/site/process/my-read",
            getMyOversee: "/site/process/my-oversee",
            mGetMyTodo: "/site/process/my-todov",
            mGetMyRead: "/site/process/my-readv",
            mGetMyOversee: "/site/process/my-overseev",
            getProcessLog: "/site/process/log",
            getThirdpartyLog: "/site/process/thirdparty-log",
            getCommentCon: "/site/comments/config",
            subComment: "/site/comments/comment",
            getBatchNodes: "/site/process/batchable-nodes",
            getMyBatchList: "/site/process/my-batch",
            toBatchByTaskIds: "/site/process/batch",
            toBatchByNodeId: "/site/process/batch-by-node",
            getBatchProgress: "/site/process/get-batch-progress",
            pkuDelDraft: "/site/form/del-apps-form",
            revokeTodo: "/site/process/revoke",
            getUserMyDepar: "/site/user/my-depart",
            gitstartInfo: "/site/form/start-data",
            postFormFirstData: "/site/apps/launch",
            getDataByAppId: "/api/form/get-data",
            startSaveDraft: "/site/form/save-form-data-draft-apps",
            sealCheckCode: "/site/seal/seal-check-code",
            searchAgentUser: "/site/user/search-agent-user",
            dealInfo: "/site/process/deal-info",
            getformchange: "/site/form/change-log",
            dealData: "/site/form/deal-data",
            getShortcutList: "/site/shortcut/list",
            addShortcut: "/site/shortcut/add",
            deleteShortcut: "/site/shortcut/delete",
            postFormData: "/site/form/save",
            uploadAuth: "/site/attach/auth-upload",
            downloadAuth: "/site/attach/auth-download",
            saveFormAndTask: "/site/task/deal",
            changeApprover: "/site/process/change-approver",
            matterArchiveEdit: "/site/archive/edit",
            pkuOaRead: "/site/pku-seal/push-oa-read",
            getstartdata: "/api/form/get-start-data",
            getTaskAuth: "/api/form/get-task-data",
            downPdf: "/pdf-server/down",
            getDataBySessId: "/api/form/get-session-data",
            getDataByInstId: "/api/form/get-inst-data",
            revokeMatter: "/site/activiti/revoke",
            myReminder: "/site/process/reminder",
            leaveCountrySave2: "/site/pku-seal/reject-update",
            taskaddsign: "/site/task/add-sign",
            batchRecord: "/site/process/batch-record",
            restBatch: "/site/process/rest-batch",
            delBatch: "/site/process/del-batch",
            getYears: "/site/process/system-up-year",
            getAppNames: "/site/process/get-app-names",
            getRecordNode: "/site/process/get-record-node",
            saveBaseReport: "/system/apps-report/save-base",
            reportFormList: "/system/apps-report/list",
            reportPublish: "/system/apps-report/publish",
            deleteReport: "/system/apps-report/delete",
            getReportFormList: "/system/apps-report/form-list",
            getSystemFields: "/system/apps-report/get-system-fields",
            getFormconponent: "/system/apps-report/all-components",
            saveReport: "/system/apps-report/save-info",
            getAppForm: "/system/form/get-forms",
            sortList: "/system/apps-report/sort-list",
            clickSort: "/system/apps-report/sort",
            topAdNoTop: "/system/apps-report/set-top",
            getRepeatFiled: "/system/apps-report/repeat-filed",
            getReportDetail: "/site/apps-report/get",
            appsReportList: "/site/apps-report/query",
            appsReportGraph: "/site/apps-report/query-graph",
            getDepartNews: "/site/department/auth-tree",
            commonQueryList: "/site/apps-report/common-query-list",
            saveCommonQuery: "/site/apps-report/save-common-query",
            delCommonQuery: "/site/apps-report/common-query-delete",
            reportExcel: "/site/apps-report/query-excel",
            thirdpartyReportExcel: "/site/apps-report/thirdparty-query-excel",
            customizedFile: "/site/apps-report/customized-file",
            threeReportList: "/site/apps-report/thirdparty-query",
            threeReportGraph: "/site/apps-report/thirdparty-query-graph",
            getHotReport: "/api/home/hot-report",
            isHasEmail: "/site/tools/check-email",
            uestcReminder: "/site/uestc/one-click-reminder",
            getjustIdentity: "/site/identity/role",
            getAuthListgroup: "/system/auth-group/index",
            searchConfig: "/system/user/search-config",
            searchPeople: "/system/user/search",
            exportUsers: "/system/user/export-users",
            import: "/system/user/import",
            getStaff: "/site/user/info-config?type=staff",
            getStudent: "/site/user/info-config?type=student",
            delUsers: "/system/user/delete",
            getUserCfg: "/system/user/create-user-config",
            addUserCfg: "/system/user/add",
            addPersonalcenter: "/system/personal-center/add",
            dbList: "/system/db-config/list",
            userSearchV2: "/system/user/searchv2",
            systemExportUser: "/system/user/export-user-queue",
            importUserV2: "/system/user/importv2",
            saveSign: "/system/team/save",
            savevSign: "/system/team/savev",
            signList: "/system/team/lists",
            delSign: "/system/team/delete",
            saveStaff: "/system/team/staff-save",
            delStaff: "/system/team/staff-delete",
            addGroup: "/system/team/add-group",
            groupList: "/system/team/allv",
            groupLists: "/system/team/all",
            delGroup: "/system/team/del-group",
            departvManage: "/api/user/departv?type=manager",
            saveDepart: "/system/department/savev",
            saveJob: "/system/job/save-job-user",
            delDepart: "/system/department/deletev",
            exportDepart: "/system/department/export",
            delDepUser: "/system/job/del-job-user",
            systemJobList: "/system/job/all",
            sortJob: "/system/job/sort-all",
            addJob: "/system/job/add-job",
            delJob: "/system/job/del-job",
            deljobUser: "/system/job/del-job-user",
            getDepartJob: "/system/department/department-info",
            setDepartJob: "/system/department/set-depart-job",
            importJobUser: "/system/job/import-jobs",
            getJobUserList: "/system/job/job-user-list",
            updateJob: "/system/department/update-depart-job",
            infoAuofficialList: "/system/seal/official-seal-list",
            addOfficial: "/system/seal/add-official-seal",
            delOfficial: "/system/seal/del-official-seal",
            addofficialUser: "/system/seal/add-official-seal-user",
            delofficialUser: "/system/seal/del-official-seal-user",
            sealhistoryUser: "/system/seal/seal-history-user",
            sealhistory: "/system/seal/seal-history",
            officialsealUsers: "/system/seal/official-seal-users",
            exportsealHistory: "/system/seal/export-seal-history",
            signatureRecord: "/system/seal/personal-seal-record",
            recordExpord: "/system/seal/personal-seal-record-export",
            importtaguser: "/system/user/import-tag-user",
            downtaguser: "/system/user/down-tag-user",
            appslist: "/system/apps-type/list",
            appsreleas: "/system/apps-type/release",
            appsdelete: "/system/apps-type/delete",
            notifysave: "/system/notify/save",
            notifylist: "/system/notify/list",
            notifydetail: "/system/notify/detail",
            appsdetail: "/system/apps-type/detail",
            notifydelete: "/system/notify/delete",
            getServiceCount: "/system/statistics/service-count",
            getDepartCount: "/system/statistics/department-count",
            noticeSave: "/system/notification/save",
            deletenotice: "/system/notification/delete",
            noticeDetail: "/system/notification/detail",
            noticeList: "/system/notification/index",
            publishNotice: "/system/notification/publish",
            application: "/system/department/auth-tree?auth=application",
            classifyList: "/system/notification-type/all",
            classifySave: "/system/notification-type/add-group",
            classifyDel: "/system/notification-type/del-group",
            appssave: "/system/apps-type/save",
            appssort: "/system/apps-type/sort",
            siteconfigSave: "/system/site-options/save",
            carouselList: "/system/banner/list",
            carouselSave: "/system/banner/save",
            gethotList: "/system/app-special/get-hot-list",
            savehotApp: "/system/app-special/save-hot-app",
            getdefaultApp: "/system/default-app/index",
            deldefaultApp: "/system/default-app/delete",
            savedefaultApp: "/system/default-app/save",
            getComment: "/system/comment-manage/index",
            saveComment: "/system/comment-manage/save",
            getNoticeIndex: "/system/notice/index",
            saveNotice: "/system/notice/save",
            savesensitiveWord: "/system/sensitive/set-words",
            getWord: "/system/sensitive/get-words",
            savewechat: "/system/wechat-config/save",
            getwechat: "/system/wechat-config/info",
            thirdpartyList: "/system/thirdparty/index",
            addthirdParty: "/system/thirdparty/add",
            editthirdParty: "/system/thirdparty/edit",
            delthirdParty: "/system/thirdparty/delete",
            setStatus: "/system/thirdparty/set-status",
            getAuthList: "/system/system-auth-group/all-group",
            getAuthTree: "/system/auth-group/tree",
            getAuthPerson: "/system/system-auth-user/list",
            addAuthGrouTree: "/system/auth-group/add",
            renameAuthGrouTree: "/system/auth-group/rename",
            getAuthByPerson: "/system/user-auths/info-auth",
            deleteAuthGrouTree: "/system/auth-group/delete",
            getTagall: "/system/attribute-tag/all",
            setAuthGrouTree: "/system/auth-group/set",
            addAuthPerson: "/system/user-auth/save",
            addAuthGrou: "/system/system-auth-group/save",
            deleteAuthGrou: "/system/system-auth-group/del",
            addAdmin: "/system/system-auth-user/save",
            deleteadmin: "/system/system-auth-user/del-manage",
            delAuthAdmin: "/system/system-auth-user/del-user",
            jobSearch: "/system/user/user-job-search",
            getIndexService: "/system/statistics/index-service",
            getProfile: "/system/statistics/index-profile",
            getStatistics: "/system/statistics/index",
            getDepartDetail: "/system/statistics/department-detail",
            getErrorLog: "/system/statistics/errors",
            getServiceDetail: "/system/statistics/service-detail",
            getLoginConfig: "/api/login-config/get",
            setLoginConfig: "/system/login-config/set",
            systemFileList: "/system/file-export/get-list",
            systemAddExport: "/system/file-export/add-export-msg",
            systemUpdata: "/system/file-export/update-export-msg",
            systemDetail: "/system/file-export/delete",
            actionloglist: "/system/action-log/list",
            actionlogdetail: "/system/action-log/detail",
            saveMiniprogramConfig: "/system/miniprogram-config/save",
            getMiniprogramConfig: "/system/miniprogram-config/info",
            searchUser: "/system/user/search-user",
            searchJobUser: "/system/user/user-job-search",
            authOrize: "/system/system-auth-authorize/save",
            authOrizeList: "/system/system-auth-authorize/list",
            objectOption: "/system/system-auth-authorize/object-option",
            delAccredit: "/system/system-auth-authorize/del",
            accreditDet: "/system/system-auth-authorize/detail",
            jobAll: "/system/job/all",
            dataList: "/system/data-source/list",
            dataSave: "/system/data-source/save",
            dataDel: "/system/data-source/delete",
            dbSave: "/system/db-config/save",
            dbDel: "/system/db-config/delete",
            dbConnect: "/system/db-config/connect",
            noticeFList: "/system/form-notice/index",
            noticeFSave: "/system/form-notice/save",
            noticeFDel: "/system/form-notice/delete",
            validatorList: "/system/form-validator/index",
            validatorSave: "/system/form-validator/save",
            validatorDel: "/system/form-validator/delete",
            wsList: "/system/form-rule/list",
            widgetSave: "/system/form-rule/save",
            widgetDel: "/system/form-rule/delete",
            prefixSave: "/system/prefix/save",
            prefixDel: "/system/prefix/delete",
            addTrigger: "/system/trigger/add",
            editTrigger: "/system/trigger/edit",
            deleteTrigger: "/system/trigger/delete",
            systemAppAll: "/system/app/all",
            enableTrigger: "/system/trigger/enable",
            disableTrigger: "/system/trigger/disable",
            getOcrList: "/system/ocr/list",
            crontablist: "/system/crontab/list",
            crontabedit: "/system/crontab/edit",
            crontabinfo: "/system/crontab/info",
            crontabstop: "/system/crontab/stop",
            crontabdel: "/system/crontab/del",
            crontabhistory: "/system/crontab/history",
            signalList: "/system/activiti-signal/list",
            addSignal: "/system/activiti-signal/add",
            editSignal: "/system/activiti-signal/edit",
            deleteSignal: "/system/activiti-signal/delete",
            enableSignal: "/system/activiti-signal/enable",
            disableSignal: "/system/activiti-signal/disable",
            getuserConfig: "/system/user-auths/user-config",
            saveuserConfig: "/system/user-auths/save-user-config",
            examineList: "/system/examine/index",
            examhisList: "/system/examine/history",
            dealTask: "/system/examine/task-deal",
            getTaskList: "/system/examine/task-list",
            infoAuth: "/system/user-auths/info-auth",
            infoList: "/system/infomation/info",
            infoImport: "/system/infomation/import",
            infoImportResult: "/system/infomation/import-result",
            infoExport: "/system/infomation/export",
            infoExportResult: "/system/infomation/export-result",
            getDepart: "/api/user/departv?type=manager",
            infoSaveUser: "/system/user/info-save",
            infoDelUser: "/system/user/info-del",
            getSite1: "/site/get_config",
            getDepartNew: "/system/department/auth-tree",
            getUser: "/system/user/search-user",
            datacenter: "/system/department/auth-tree?auth=datacenter",
            getMatter: "/system/app/search",
            sysappsdepart: "/system/app/search",
            messageCount: "/site/message/count",
            getMaterialClassify: "/system/material-classification/index",
            getMaterial: "/system/material-picture/index",
            visitsList: "/api/visits/list",
            getGrantMeLists: "/site/grant-account/grant-me",
            appsReport: "/site/apps-report/lists",
            allGrade: "/api/user/grade",
            newGetSetting: "/site/notice/personal-setting",
            subNotice: "/site/notice/save",
            sealCheckPwd: "/site/seal/seal-check-password",
            sealCheckModile: "/site/seal/seal-check-mobile",
            sealCheckToken: "/site/seal/get-sweep-code-token",
            setSealCheck: "/site/seal/set-seal-not-validate",
            getIdentitys: "/site/user/get-identitys",
            setIdentity: "/site/user/set-identity",
            setUnbind: "/site/user/unbind-wechat",
            changeUserLogin: "/site/grant-account/change-login-user",
            systemTree: "/system/department/system-auth-tree"
        }
    },
    e644: function (e, t, a) {
        "use strict";
        a("99af"),
        a("caad"),
        a("c975"),
        a("b0c0"),
        a("2532");
        var n = a("a026"),
        i = a("e8d2"),
        s = a("5557"),
        o = a("1d8b"),
        c = {
            authKey: "authControl_key",
            usernameKey: "username_key",
            validationKey: "validation_key",
            siteConfigKey: "getSiteConfig",
            checkLogin: function () {
                return !!this.getCookieUid()
            },
            getCookieUid: function () {
                return i["a"].getCookie(i["a"].getUidKey())
            },
            getUserInfo: function () {
                var e = s["a"].getSItem(this.usernameKey);
                return e || null
            },
            toLogin: function () {
                if (i["a"].openDebug() && alert(document.cookie), "miniprogram" === window.__wxjs_environment && s["a"].getLItem("miniprogramBind"))
                    wx.miniProgram.navigateBack();
                else {
                    var e = o["a"].getApi("frameToLogin") + "?redirect_url=" + i["a"].getCurrUrl(),
                    t = i["a"].query("token"),
                    a = i["a"].query("ticket"),
                    n = i["a"].query("number");
                    null != t ? e = e + "&token=" + t : null != a && (e = e + "&ticket=" + a),
                    null != n && (e = e + "&number=" + n),
                    i["a"].postTimeLine(4),
                    window.location.href = e
                }
            },
            setSiteConfig: function (e) {
                var t = this;
                if (s["a"].getSItem(this.siteConfigKey))
                    return n["default"].prototype.siteConfig = s["a"].getSItem(this.siteConfigKey), this.setWebFacicon(n["default"].prototype.siteConfig), this.getControl(e), !0;
                i["a"].appFetch({
                    method: "get",
                    url: "getSiteConfig",
                    data: {
                        v: (new Date).getTime()
                    }
                }, (function (a) {
                        0 == a.e ? (s["a"].setSItem(t.siteConfigKey, a.d), n["default"].prototype.siteConfig = a.d, t.setWebFacicon(a.d), t.getControl(e)) : n["default"].prototype.$message.error({
                            message: "获取网站基础信息失败，请刷新页面重试",
                            showClose: !0
                        })
                    }), (function () {
                        n["default"].prototype.$message.error({
                            message: "获取网站基础信息失败，请刷新页面重试",
                            showClose: !0
                        })
                    }))
            },
            setWebFacicon: function (e) {
                if (e.favicon_logo) {
                    var t = document.createElement("link");
                    t.rel = "shortcut icon",
                    t.href = e.imghost + "/" + e.favicon_logo,
                    document.head.appendChild(t)
                }
            },
            getControl: function (e) {
                var t = this;
                if (!this.checkLogin())
                    return s["a"].getSItem(this.authKey) && this.delControl(), e(), !1;
                var a = this.getUserInfo();
                a && a.uid == this.getCookieUid() && s["a"].getSItem(this.authKey) ? e && e() : n["default"].prototype.appFetch({
                    method: "get",
                    url: "getAllAuth"
                }, (function (a) {
                        0 == a.e ? (t.getUserInfoByApi(e), s["a"].setSItem(t.authKey, 0 == a.e ? a.d : {})) : n["default"].prototype.$message.error({
                            message: "获取用户权限失败，请刷新页面重试",
                            showClose: !0
                        })
                    }), (function () {
                        n["default"].prototype.$message.error({
                            message: "获取用户权限失败，请刷新页面重试",
                            showClose: !0
                        })
                    }))
            },
            getUserInfoByApi: function (e) {
                var t = this;
                n["default"].prototype.appFetch({
                    method: "get",
                    url: "getUserName"
                }, (function (a) {
                        0 == a.e ? (s["a"].setSItem(t.usernameKey, {
                                name: a.d.name,
                                uid: a.d.uid,
                                college: a.d.college,
                                sex: a.d.sex,
                                avatar: a.d.avatar,
                                administrative_level: a.d.administrative_level
                            }), e && e()) : n["default"].prototype.$message.error({
                            message: "获取用户信息失败，请刷新页面重试",
                            showClose: !0
                        })
                    }), (function () {
                        n["default"].prototype.$message.error({
                            message: "获取用户信息失败，请刷新页面重试",
                            showClose: !0
                        })
                    }))
            },
            loginOut: function (e) {
                var t = this;
                i["a"].appFetch({
                    method: "get",
                    url: "logout"
                }, (function (a) {
                        if (0 == a.e)
                            if (t.delControl(), e)
                                window.location.href = appConfig.baseUrl + "printer/login?casLogout=1";
                            else if (appConfig.logout) {
                                var i = "".concat(appConfig.logout, "?redirect_url=").concat(window.location.href);
                                window.location.href = i
                            } else
                                window.location.href = appConfig.baseUrl + "site/login";
                        else
                            n["default"].prototype.$message.error({
                                message: "退出登陆失败，请点击重试",
                                showClose: !0
                            })
                    }), (function () {
                        n["default"].prototype.$message.error({
                            message: "退出登陆失败，请点击重试",
                            showClose: !0
                        })
                    }))
            },
            delControl: function () {
                s["a"].removeSItem(this.authKey),
                s["a"].removeSItem(this.usernameKey)
            },
            queryControl: function (e) {
                var t = s["a"].getSItem(this.authKey);
                return !(null == t || !t.permits) && (t.issuper || t.permits.includes(e))
            },
            isAdmin: function () {
                var e = s["a"].getSItem(this.authKey);
                return null != e && (e.issuper || !!e.permits.length)
            },
            isSuper: function () {
                var e = s["a"].getSItem(this.authKey);
                return null != e && e.issuper
            },
            Screening: function (e, t) {
                for (var a in t)
                    for (var n in t[a])
                         - 1 == n.indexOf("User_") && -1 == n.indexOf("Sync") && -1 == n.indexOf("Quote") || e[a] && t[a] && t[a][n] == e[a][n] && delete e[a][n];
                return e
            }
        };
        n["default"].prototype.authH || (n["default"].prototype.authH = c),
        t["a"] = c
    },
    e8d2: function (e, t, a) {
        "use strict";
        a("4de4"),
        a("4160"),
        a("caad"),
        a("c975"),
        a("a15b"),
        a("d81d"),
        a("fb6a"),
        a("a434"),
        a("b0c0"),
        a("a9e3"),
        a("b64b"),
        a("d3b7"),
        a("4d63"),
        a("ac1f"),
        a("25f0"),
        a("2532"),
        a("466d"),
        a("5319"),
        a("841c"),
        a("1276"),
        a("159b");
        var n = a("5530"),
        i = a("53ca"),
        s = a("2909"),
        o = a("a026"),
        c = a("6128"),
        r = a("1d8b"),
        u = a("9403"),
        d = a("8237"),
        l = a.n(d),
        f = {};
        o["default"].filter("Urlfilter", (function (e) {
                if ("" != e)
                    return -1 != e.indexOf("http") ? e : o["default"].prototype.siteConfig.imghost + e
            })),
        f.setSign = function (e) {
            var t = this.getStrTime("Ymd"),
            a = this.getUrlParam(e),
            n = a["file"] ? a["file"] : "";
            return n ? (a["sign"] && (e = e.split("sign")[0].slice(0, -1)), e + "&sign=" + l()(n + "" + t)) : e
        },
        f.postTimeLine = function (e, t) {
            if (!localStorage.getItem("openPostTimeLine"))
                return !1;
            var a = "postTimeLine",
            n = localStorage.getItem(a);
            t = t || {},
            t.nowTime = (new Date).getTime(),
            t.api = t.api ? t.api : "",
            t.useTime = t.useTime ? t.useTime : 0;
            var i = new FormData;
            i.append("type", e),
            i.append("uid", n),
            i.append("data", JSON.stringify(t));
            var s = new XMLHttpRequest;
            s.open("post", location.protocol + "//" + location.hostname + "/api/debug/log"),
            s.send(i)
        },
        f.openDebug = function () {
            return -1 !== window.location.href.indexOf("debug=1")
        },
        f.debounce = function (e, t, a) {
            if ("function" !== typeof t)
                throw new TypeError("need a function");
            var n = "debounce_" + e;
            window[n] && clearTimeout(window[n]),
            window[n] = setTimeout((function () {
                        t()
                    }), a)
        },
        f.getAgentParams = function (e) {
            return e.agent_uid ? {
                agent_uid: e.agent_uid ? e.agent_uid : 0,
                agent_department_id: e.agent_department_id ? e.agent_department_id : 0,
                agent_name: e.agent_name ? e.agent_name : ""
            }
             : {}
        },
        f.getAgentInfo = function (e) {
            return e.id ? {
                agent_uid: e.id ? e.id : 0,
                agent_department_id: e.depart_id ? e.depart_id : 0
            }
             : {}
        },
        f.templateAnalysis = function (e) {
            if (!e.length)
                return "";
            var t = [],
            a = {
                formData: [],
                varData: []
            };
            return e.split("{").forEach((function (e) {
                    return t.push.apply(t, Object(s["a"])(e.split("}")))
                })),
            t.forEach((function (e, t) {
                    t % 2 == 1 && (0 == e.indexOf("form") ? a.formData.push(e) : 0 != e.indexOf("user") && 0 != e.indexOf("app") || a.varData.push(e))
                })),
            a.formData.forEach((function (e) {
                    var a = e.split("form")[1].slice(0, e.split("form")[1].indexOf("_")),
                    n = e.split("form")[1].slice(e.split("form")[1].indexOf("_") + 1),
                    i = "";
                    if (window["tablevm".concat(a)] && window["tablevm".concat(a)].plugin.plugins[n]) {
                        var s = window["tablevm".concat(a)].plugin.plugins[n];
                        switch (s.type) {
                        case "dRegion":
                            i = s.data.address;
                            break;
                        case "dCalendar":
                            var o = new Date(s.data),
                            c = o.getFullYear() + "年",
                            r = (o.getMonth() + 1 < 10 ? "0" + (o.getMonth() + 1) : o.getMonth() + 1) + "月",
                            u = (o.getDate() < 10 ? "0" + o.getDate() : o.getDate()) + "日";
                            i = c + r + u;
                            break;
                        case "dOpinion":
                            i = s.attr.data.options.filter((function (e) {
                                        return e.value == s.data.option
                                    }))[0].name;
                            break;
                        default:
                            i = s.data instanceof Object && s.data.name ? s.data.name : s.data instanceof Array && s.data[0] && s.data[0].name ? s.data.map((function (e) {
                                        return e.name
                                    })).join("、") : s.data
                        }
                    }
                    t.splice(t.indexOf(e), 1, i)
                })),
            a.varData.forEach((function (e) {
                    t.splice(t.indexOf(e), 1, window.$EVN["matter_".concat(e)] || "")
                })),
            t.join("")
        },
        f.getUrlStr = function (e, t) {
            for (var a in e += "?", t)
                t[a] && (e += a + "=" + t[a] + "&");
            return e.slice(0, -1)
        },
        f.getUidKey = function () {
            return appConfig.userKeyPrefix ? appConfig.userKeyPrefix + "_" + appConfig.uidKey : appConfig.uidKey
        },
        f.isEmptyObj = function (e) {
            return !e || !Object.keys(e).length
        },
        f.appDetail = function (e, t) {
            if (e.details_page)
                this.appFetch({
                    method: "get",
                    url: "getProcessInfoNew",
                    data: {
                        app_id: e.id
                    }
                }, (function (a) {
                        if (0 == a.e) {
                            if (a.d.nodes)
                                if (a.d.nodes.filter((function (e) {
                                            return "StartEvent" == e.node_type && !e.node_parent_id
                                        }))[0].steps)
                                    n = window.location.origin + (t ? "/v2/matter/m_startStep?id=" : "/v2/matter/startStep?id=") + e.id;
                                else
                                    n = window.location.origin + (t ? "/v2/matter/m_start?id=" : "/v2/matter/start?id=") + e.id;
                            else
                                var n = window.location.origin + (t ? "/v2/matter/m_start?id=" : "/v2/matter/start?id=") + e.id;
                            "pku" == f.getWebId() && (n += "y" == sessionStorage.getItem("pku_hiddenHeader") ? "&hiddenHeader=y" : ""),
                            f.isWeixin().isPhone ? location.href = n : window.open(n, "_blank")
                        } else
                            self.$message({
                                message: a.m,
                                type: "error"
                            })
                    }), (function () {
                        self.loading = !1
                    }));
            else {
                var a = window.location.origin + (t ? "/v2/matter/m_detail?id=" : "/v2/matter/detail?id=") + e.id;
                "pku" == f.getWebId() && (a += "y" == sessionStorage.getItem("pku_hiddenHeader") ? "&hiddenHeader=y" : ""),
                f.isWeixin().isPhone ? location.href = a : window.open(a, "_blank")
            }
        },
        f.firstUppercase = function (e) {
            return !!e && (e = e.toString(), e.substr(0, 1).toUpperCase() + e.substr(1))
        },
        f.copyObj = function (e) {
            return JSON.parse(JSON.stringify(e))
        },
        f.copyObjFor = function (e) {
            function t(e) {
                if ("object" != Object(i["a"])(e))
                    return e;
                var a = {};
                if (Array.isArray(e) ? a = [] : null === e && (a = null), null !== a)
                    for (var n in e)
                        a[n] = t(e[n]);
                return a
            }
            return t(e)
        },
        f.getStyle = function (e, t) {
            e = this.copyObj(e);
            for (var a in e = Object(n["a"])(Object(n["a"])({}, e), t), e)
                NaN !== Number(e[a]) && isFinite(e[a]) && (e[a] = e[a] + "px");
            return e
        },
        f.fireEvent = function (e, t) {
            if (document.createEventObject) {
                var a = document.createEventObject();
                return e.fireEvent("on" + t, a)
            }
            a = document.createEvent("HTMLEvents");
            return a.initEvent(t, !0, !0),
            !e.dispatchEvent(a)
        },
        f.isWeixin = function () {
            var e = navigator.userAgent,
            t = e.indexOf("PKUiOS") > -1,
            a = e.indexOf("PKUAndroid") > -1,
            n = e.indexOf("Android") > -1 || e.indexOf("Adr") > -1 || a,
            i = !!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || t,
            s = n || i;
            e = e.toLowerCase();
            var o = "micromessenger" == e.match(/MicroMessenger/i) || "_sq_" == e.match(/_SQ_/i);
            return {
                isWeixin: o,
                isPhone: s,
                isAndroid: n
            }
        },
        f.getCurrUrl = function () {
            var e = window.location.href,
            t = ["<", ">", ",", "$", "\\(", "\\)"];
            return t.forEach((function (t) {
                    e = e.replace(t, "")
                })),
            encodeURIComponent(e)
        },
        f.getCookie = function (e) {
            var t,
            a = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
            return (t = document.cookie.match(a)) ? unescape(t[2]) : null
        },
        f.setBpmnProperties = function (e, t) {
            try {
                "undefined" == typeof e[0].tagName || "INPUT" !== e[0].tagName && "SELECT" !== e[0].tagName ? e.text(t) : e.val(t),
                this.fireEvent(e[0], "input"),
                this.fireEvent(e[0], "change")
            } catch (a) {
                console.log(e[0]),
                console.log(e.tagName),
                console.log(e),
                console.log(a)
            }
        },
        f.getSpendTime = function (e, t) {
            if (void 0 != e) {
                if (e = e.replace(/\-/g, "/"), null != t) {
                    t = t.replace(/\-/g, "/");
                    var a = new Date(t).getTime() - new Date(e).getTime()
                } else
                    a = (new Date).getTime() - new Date(e).getTime();
                var n = parseInt(a / 1e3 / 60 / 60 / 24),
                i = parseInt(a / 1e3 / 60 / 60 % 24),
                s = parseInt(a / 1e3 / 60 % 60);
                return 0 == n && 0 == i && s <= 0 ? "一分钟以内" : 0 == n && 0 == i ? s + "分钟" : 0 == n ? i + "小时" + s + "分钟" : n + "天" + i + "小时" + s + "分钟"
            }
        },
        f.query = function (e) {
            var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
            a = window.location.search.substr(1).match(t);
            return null != a ? unescape(a[2]) : null
        },
        f.getUrlParam = function (e) {
            if (e.split("?")[1]) {
                var t = e.split("?")[1].split("#")[0];
                if (!t)
                    return {};
                for (var a = t.split("&"), n = {}, i = 0; i < a.length; i++) {
                    var s = a[i].split("=")[0],
                    o = a[i].split("=")[1];
                    n[s] = o
                }
                return n
            }
            return ""
        },
        f.setVueData = function (e, t) {
            for (var a in t)
                e[a] = t[a]
        },
        f.getWebId = function () {
            return appConfig.webId
        },
        f.getWebStyle = function (e) {
            return this.getWebId()
        },
        f.getClientType = function (e) {
            var t = e.replace("/", "");
            return "m_" == t.substr(0, 2)
        },
        f.mergeObj = function (e, t, a) {
            return e = e || {},
            t = t || {},
            a = a || {},
            Object(n["a"])(Object(n["a"])(Object(n["a"])({}, e), t), a)
        },
        f.timestampToTime = function (e) {
            var t = new Date(1e3 * e),
            a = t.getFullYear() + "-",
            n = (t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1) + "-",
            i = t.getDate() + " ",
            s = t.getHours() + ":",
            o = t.getMinutes() + ":",
            c = t.getSeconds();
            return a + n + i + s + o + c
        },
        f.getStrTime = function (e, t) {
            var a = t ? new Date(t) : new Date,
            n = {};
            for (var i in n["Y"] = a.getFullYear(), n["m"] = a.getMonth() + 1, n["d"] = a.getDate(), n["H"] = a.getHours(), n["i"] = a.getMinutes(), n["s"] = a.getSeconds(), n["m"] = n["m"] >= 10 ? n["m"] : "0" + n["m"], n["d"] = n["d"] >= 10 ? n["d"] : "0" + n["d"], n["H"] = n["H"] >= 10 ? n["H"] : "0" + n["H"], n["i"] = n["i"] >= 10 ? n["i"] : "0" + n["i"], n["s"] = n["s"] >= 10 ? n["s"] : "0" + n["s"], n)
                e = e.replace(i, n[i]);
            return e
        },
        f.swapArray = function (e, t, a) {
            return e[t] = e.splice(a, 1, e[t])[0],
            e
        },
        f.getDocumentTitle = function (e, t) {
            "buaa" == appConfig.webId ? document.title = "网上办事大厅-".concat(e) : "pku" == appConfig.webId ? document.title = "北京大学网上办事大厅" : document.title = e
        },
        f.toExtend = function (e, t) {
            switch (e.type) {
            case "download":
                var a = r["a"].getApi(e.url);
                window.open(this.setGetUrl(a, t));
                break
            }
        },
        f.setGetUrl = function (e, t) {
            var a = "";
            for (var n in t)
                a += n + "=" + t[n] + "&";
            return a && (a = a.slice(0, -1)),
            e + "?" + a
        },
        f.closePage = function () {
            var e = navigator.appName;
            "Netscape" == e && (window.open("", "_self", ""), window.close()),
            "Microsoft Internet Explorer" == e && (window.parent.opener = "whocares", window.parent.close())
        },
        f.isUrl = function (e) {
            var t = /^(?=^.{3,255}$)(http(s)?:\/\/)(www\.)?/;
            return t.test(e)
        },
        f.getWordLength = function (e) {
            var t = 0;
            try {
                e = e.replace(/(\r\n+|\s+|　+)/g, "龘"),
                e = e.replace(/[\x00-\xff]/g, "m"),
                e = e.replace(/m+/g, "*"),
                e = e.replace(/龘+/g, ""),
                t = e.length
            } catch (a) {}
            return t
        },
        f.validateWordNumber = function (e, t, a) {
            var n = f.getWordLength(e);
            return t && a ? !!(n <= t && n >= a) : t && !a ? !!(n <= t) : !t && a ? !!(n >= a) : void 0
        },
        f.toInfoCenter = function () {
            var e = u["a"].getConfigId("ucenterPath", window.location.hostname);
            if (e.includes(".")) {
                var t = "";
                e.includes("http") || (t = "".concat(window.location.protocol, "//")),
                window.open(t + e, "_blank")
            } else
                window.open(appConfig.baseUrl + e, "_blank")
        },
        f.minipDownloadFile = function (e, t) {
            "miniprogram" === window.__wxjs_environment ? f.appFetch({
                url: "getDownloadFile",
                method: "get",
                data: {
                    id: t
                }
            }).then((function (e) {
                    0 == e.e ? wx.miniProgram.navigateTo({
                        url: "../downloadFile/downloadFile?downloadUrl=".concat(encodeURIComponent(e.d))
                    }) : 1 == e.e ? o["default"].prototype.$message({
                        message: "文件大于50M，不能通过小程序 下载，请到电脑进行下载",
                        type: "warning",
                        showClose: !0
                    }) : o["default"].prototype.$message({
                        type: "error",
                        message: e.m,
                        showClose: !0
                    })
                })).catch((function (e) {
                    o["default"].prototype.$message({
                        type: "error",
                        message: "数据请求失败，请重新进入页面或点击按钮",
                        showClose: !0
                    })
                })) : window.open(e)
        },
        f.toChinesNum = function (e) {
            var t = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
            a = ["", "十", "百", "千", "万"];
            e = parseInt(e);
            var n = function (e) {
                for (var n = e.toString().split("").reverse(), i = "", s = 0; s < n.length; s++)
                    i = (0 == s && 0 == n[s] || s > 0 && 0 == n[s] && 0 == n[s - 1] ? "" : t[n[s]] + (0 == n[s] ? a[0] : a[s])) + i;
                return i
            },
            i = Math.floor(e / 1e4),
            s = e % 1e4;
            return s.toString().length < 4 && (s = "0" + s),
            i ? n(i) + "万" + n(s) : n(e)
        },
        f.appFetch = c["a"],
        o["default"].prototype.appCommonH || (o["default"].prototype.appCommonH = f),
        t["a"] = f
    }
});
