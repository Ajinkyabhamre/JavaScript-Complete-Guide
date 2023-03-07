let myjokes =  [
        {
            "category": "Programming",
            "type": "single",
            "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 41,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "There are only 10 kinds of people in this world: those who know binary and those who don't.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 35,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I didn't vaccinate my 10 kids and the one that survived is fine!",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 96,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "My ex had an accident. I told the paramedics the wrong blood type for her. She'll finally experience what rejection is really like.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 152,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 180,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 55,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "Nowadays people are so sensitive, you can't even say \"black paint\" anymore.\nInstead, you have to say \"Jamal, please paint the fence\".",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": true,
                "sexist": false,
                "explicit": false
            },
            "id": 133,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 259,
            "safe": true,
            "lang": "en"
        },
        {
            "category": "Dark",
            "type": "single",
            "joke": "I was going to tell a dead baby joke. But I decided to abort.",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": true
            },
            "id": 207,
            "safe": false,
            "lang": "en"
        },
        {
            "category": "Programming",
            "type": "single",
            "joke": "Eight bytes walk into a bar.\nThe bartender asks, \"Can I get you anything?\"\n\"Yeah,\" reply the bytes.\n\"Make us a double.\"",
            "flags": {
                "nsfw": false,
                "religious": false,
                "political": false,
                "racist": false,
                "sexist": false,
                "explicit": false
            },
            "id": 34,
            "safe": true,
            "lang": "en"
        }
    ]

    let index = Math.floor(Math.random() * myjokes.length - 1);
    jokes.innerHTML = myjokes[index].joke