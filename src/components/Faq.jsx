import React, { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { gsap } from "gsap";

const faqs = [
  {
    question: "Can I leave?",
    answer: "Why would you want to?",
  },
  {
    question: "Is it always this hot?",
    answer: "Only when you misbehave. Or behave very, very well.",
  },
  {
    question: "Who’s in charge here?",
    answer:
      "She wears heels made of bone and lipstick made of sin. You’ll meet her soon.",
  },
  {
    question: "Is there love in Hell?",
    answer: "Love? No. Obsession? Absolutely.",
  },
  {
    question: "What did I do to deserve this?",
    answer: "You already know. Don’t play innocent now.",
  },
  {
    question: "Can I scream?",
    answer: "Of course. We encourage it.",
  },
  {
    question: "Is this punishment or pleasure?",
    answer: "Here, we don’t distinguish between the two.",
  },
  {
    question: "How long will I stay?",
    answer: "Time doesn't pass here. Just suffering.",
  },
  {
    question: "Are there demons?",
    answer: "More than you can handle. And they like you.",
  },
  {
    question: "Can I make a deal?",
    answer: "You already did. That’s why you’re here.",
  },
  {
    question: "Do you take souls?",
    answer: "We collect them. Gently. Then burn them slowly.",
  },
  {
    question: "Is this real?",
    answer: "As real as your last regret.",
  },
  {
    question: "Will it hurt?",
    answer: "Oh, darling… that's the point.",
  },
  {
    question: "What’s that smell?",
    answer: "Desire. And a hint of sulfur.",
  },
  {
    question: "Do I have a room?",
    answer: "Yes. Lined with mirrors. All of them watching.",
  },
  {
    question: "Is there music?",
    answer: "Screams are the symphony. Pain is the rhythm.",
  },
  {
    question: "Who built this place?",
    answer: "Architects of agony. Designers of dread.",
  },
  {
    question: "Can I sleep?",
    answer: "Only if your guilt lets you.",
  },
  {
    question: "Why is everyone looking at me?",
    answer: "Because you’re the main event tonight.",
  },
  {
    question: "Is there escape?",
    answer: "We removed all the exits. For fun.",
  },
  {
    question: "Do you punish everyone?",
    answer: "Only the beautiful sinners.",
  },
  {
    question: "What’s her name?",
    answer: "She has many. But none you'll survive saying out loud.",
  },
  {
    question: "Can I touch her?",
    answer: "She touches first. If she likes you.",
  },
  {
    question: "Do I belong here?",
    answer: "You *fit* here perfectly. Almost like you were made for this.",
  },
  {
    question: "Will they miss me?",
    answer: "They’ve already forgotten you. That’s why you're ours now.",
  },
  {
    question: "Is this a dream?",
    answer: "Worse. It’s a craving turned real.",
  },
  {
    question: "What happens if I behave?",
    answer: "We don’t recommend that. It gets... boring.",
  },
  {
    question: "Is there fire?",
    answer: "Inside you. We just help feed it.",
  },
  {
    question: "Can I cry?",
    answer: "Your tears are currency here.",
  },
  {
    question: "Are those chains necessary?",
    answer: "Only if you fight. We hope you fight.",
  },
  {
    question: "Can I beg?",
    answer: "Yes. It excites the staff.",
  },
  {
    question: "Is there food?",
    answer: "Yes. You’re on the menu tonight.",
  },
  {
    question: "What’s the dress code?",
    answer: "Skin. And sin.",
  },
  {
    question: "Do you believe in mercy?",
    answer: "We worship the absence of it.",
  },
  {
    question: "Why is it so dark?",
    answer: "So your sins can whisper without shame.",
  },
  {
    question: "Can I dance?",
    answer: "Yes. On the ashes of your past.",
  },
  {
    question: "Is this a joke?",
    answer: "The punchline is your fate.",
  },
  {
    question: "Is she watching me?",
    answer: "She never blinks. Especially when you squirm.",
  },
  {
    question: "What’s that sound?",
    answer: "It’s you. In denial.",
  },
  {
    question: "Will I get used to it?",
    answer: "No. That’s the beauty of it.",
  },
  {
    question: "Why me?",
    answer: "Because you asked the wrong question. Now ask the right one.",
  },
  {
    question: "Is she real?",
    answer: "She’s more real than your regrets.",
  },
  {
    question: "Can I touch the fire?",
    answer: "You already have. It liked you back.",
  },
  {
    question: "Is this forever?",
    answer: "Forever starts with your next scream.",
  },
  {
    question: "Is there a leader?",
    answer: "She rules with lips like poison and a heart made of knives.",
  },
  {
    question: "Are there rules?",
    answer: "Break all of them. That’s how you earn attention.",
  },
  {
    question: "Will I be punished?",
    answer: "Constantly. Lovingly. Creatively.",
  },
  {
    question: "Why can’t I stop shaking?",
    answer: "That’s just your soul waking up.",
  },
  {
    question: "What’s her touch like?",
    answer: "Velvet wrapped around razor blades.",
  },
  {
    question: "Do I get a safe word?",
    answer: "Yes. But it only makes things worse.",
  },
  {
    question: "Are those screams real?",
    answer: "So are the smiles that follow them.",
  },
  {
    question: "Is it hot in here?",
    answer: "It’s you. Burning from the inside.",
  },
  {
    question: "Can I repent?",
    answer: "We like our sinners unwashed.",
  },
  {
    question: "What happens at midnight?",
    answer: "She comes. And she doesn't knock.",
  },
  {
    question: "Can I close my eyes?",
    answer: "Sure. We’ll just open them for you.",
  },
  {
    question: "Is this a game?",
    answer: "Yes. But only she wins.",
  },
  {
    question: "What’s her kiss like?",
    answer: "Hotter than fire. Deadlier than silence.",
  },
  {
    question: "Why does this feel good?",
    answer: "Because your shame begged for it.",
  },
  {
    question: "Do you take confessions?",
    answer: "We savor them. Slowly.",
  },
  {
    question: "Who am I here?",
    answer: "A toy. A lesson. A masterpiece in torment.",
  },
  {
    question: "What’s beneath the floor?",
    answer: "More Hell. Deeper. Wetter. Worse.",
  },
  {
    question: "Will I remember this?",
    answer: "Only when you beg to forget.",
  },
  {
    question: "What if I like it here?",
    answer: "You will. That’s the trap.",
  },
  {
    question: "Can I hide?",
    answer: "From her? Try. She loves hide and seek.",
  },
  {
    question: "Is this punishment for my desires?",
    answer: "No. This *is* your desire.",
  },
  {
    question: "What does she want?",
    answer: "Your surrender. And your silence.",
  },
  {
    question: "Will she break me?",
    answer: "She prefers to unravel you, thread by sinful thread.",
  },
  {
    question: "Are we alone?",
    answer: "We’re never alone. Especially in the dark.",
  },
  {
    question: "Will I bleed?",
    answer: "Not always red.",
  },
  {
    question: "What’s that taste?",
    answer: "Shame. Lust. Regret.",
  },
  {
    question: "Is there redemption?",
    answer: "Not for the interesting ones.",
  },
  {
    question: "Why is she smiling?",
    answer: "Because you finally stopped lying to yourself.",
  },
  {
    question: "Does Hell change people?",
    answer: "No. It reveals them.",
  },
  {
    question: "Can I resist?",
    answer: "We encourage resistance. It makes the fall so much sweeter.",
  },
  {
    question: "Is this madness?",
    answer: "It’s called clarity down here.",
  },
  {
    question: "Do I still have a heart?",
    answer: "Yes. And she’s holding it.",
  },
  {
    question: "Who are the others?",
    answer: "Past lovers. Future mistakes.",
  },
  {
    question: "Can I choose my fate?",
    answer: "You already did. She was wearing red.",
  },
  {
    question: "Why am I smiling?",
    answer: "Because pain never looked so good.",
  },
  {
    question: "Will she kiss me?",
    answer: "Eventually. After she breaks your will.",
  },
  {
    question: "What happens next?",
    answer: "You scream. She laughs. We all celebrate.",
  },
  {
    question: "Why is the floor warm?",
    answer: "You're lying on forgotten promises.",
  },
  {
    question: "Who lit the candles?",
    answer: "They light themselves when someone sins.",
  },
  {
    question: "Can I laugh?",
    answer: "Only if it’s nervous.",
  },
  {
    question: "What’s behind that door?",
    answer: "Your second chance. It's locked forever.",
  },
  {
    question: "Why does it smell like roses?",
    answer: "Because thorns are nearby.",
  },
  {
    question: "Can I scream her name?",
    answer: "Only if you're ready for her to answer.",
  },
  {
    question: "Is there water here?",
    answer: "Yes. It boils with your guilt.",
  },
  {
    question: "Why do the shadows move?",
    answer: "Because they remember who you used to be.",
  },
  {
    question: "Who's whispering?",
    answer: "You. From the inside out.",
  },
  {
    question: "Why is my mouth dry?",
    answer: "You've been silent too long.",
  },
  {
    question: "Can I ask for more?",
    answer: "That’s what got you here.",
  },
  {
    question: "Who is she really?",
    answer: "Your consequence with a crown.",
  },
  {
    question: "Why does it sting when she looks at me?",
    answer: "Eyes like hers pierce what you hide.",
  },
  {
    question: "Is this a trial?",
    answer: "No. It's your final performance.",
  },
  {
    question: "Do I have a name here?",
    answer: "Names are luxuries. Here, you're a sound.",
  },
  {
    question: "Can I be forgiven?",
    answer: "Forgiveness costs more than your soul.",
  },
  {
    question: "Is she alone?",
    answer: "She's never alone. She has your secrets.",
  },
  {
    question: "Why does the mirror smile?",
    answer: "Because it sees what you deny.",
  },
  {
    question: "Do the walls breathe?",
    answer: "Yes. They're inhaling your shame.",
  },
  {
    question: "Can I close the door?",
    answer: "Doors here open inward.",
  },
  {
    question: "What if I run?",
    answer: "She loves a chase.",
  },
  {
    question: "Why are my hands shaking?",
    answer: "They remember the sins you forgot.",
  },
  {
    question: "Do they watch me sleep?",
    answer: "You’ve never actually slept.",
  },
  {
    question: "What’s the price of silence?",
    answer: "Everything you begged to say.",
  },
  {
    question: "Can I start over?",
    answer: "We burned your reset button.",
  },
  {
    question: "Will she touch my soul?",
    answer: "Only to twist it.",
  },
  {
    question: "Is this my fault?",
    answer: "She prefers it when you admit it.",
  },
  {
    question: "Who carved the ceiling?",
    answer: "Every mark is a forgotten promise.",
  },
  {
    question: "Is this the end?",
    answer: "Endings require closure. Hell has none.",
  },
  {
    question: "Do I get to choose?",
    answer: "You already did. You just lied about it.",
  },
  {
    question: "Why do I feel watched?",
    answer: "Because you are—by the version of you that broke.",
  },
  {
    question: "Are there others like me?",
    answer: "No. You’re her special case.",
  },
  {
    question: "Why do I feel cold and hot at once?",
    answer: "That’s shame and desire dancing together.",
  },
  {
    question: "Why does she smile when I beg?",
    answer: "Because you finally speak her language.",
  },
  {
    question: "Can I ask her questions?",
    answer: "You can try. Her answers are... poetic.",
  },
  {
    question: "Who stitched my wounds shut?",
    answer: "She did. With thread made of lies.",
  },
  {
    question: "Is this the bottom?",
    answer: "There's always a lower level.",
  },
  {
    question: "Can I scream louder?",
    answer: "We hope you do. The acoustics are perfect.",
  },
  {
    question: "What does she wear?",
    answer: "Regret. And just enough mystery.",
  },
  {
    question: "Why do I feel exposed?",
    answer: "Because nothing is hidden from her.",
  },
  {
    question: "What happens if I disobey?",
    answer: "That’s how legends are made.",
  },
  {
    question: "Can I worship her?",
    answer: "That’s step one.",
  },
  {
    question: "Is she proud of me?",
    answer: "You’ll know when she smiles without warmth.",
  },
  {
    question: "What time is it?",
    answer: "It’s always too late.",
  },
  {
    question: "What if I enjoy the pain?",
    answer: "Then you finally understand.",
  },
  {
    question: "Can I become like her?",
    answer: "Only if she decides to break you the right way.",
  },
  {
    question: "Will she mark me?",
    answer: "You won’t see it—but everyone else will.",
  },
  {
    question: "What are these voices?",
    answer: "Every 'yes' you should’ve said 'no' to.",
  },
  {
    question: "Why does she hum?",
    answer: "It's the lullaby of unholy things.",
  },
  {
    question: "Can I leave if I suffer enough?",
    answer: "There’s no such thing as enough here.",
  },
  {
    question: "Can she read my mind?",
    answer: "She wrote most of it.",
  },
  {
    question: "Will she come closer?",
    answer: "Only when your fear tastes ripe.",
  },
  {
    question: "Do I still matter?",
    answer: "Only as much as your screams do.",
  },
  {
    question: "What’s under my skin?",
    answer: "Regret. And her fingerprints.",
  },
  {
    question: "Can I earn her mercy?",
    answer: "Not with your kind of past.",
  },
  {
    question: "What are these marks?",
    answer: "Love notes. In her language.",
  },
  {
    question: "Do I belong to her?",
    answer: "Body, voice, ache—yes.",
  },
  {
    question: "Why am I aroused by fear?",
    answer: "Because down here, desire wears fangs.",
  },
  {
    question: "What if I don’t scream?",
    answer: "Then she whispers closer.",
  },
  {
    question: "What’s her laugh like?",
    answer: "A promise and a warning in one breath.",
  },
  {
    question: "Why do the lights flicker?",
    answer: "They react to your pulse.",
  },
  {
    question: "Can I dance with her?",
    answer: "Only if you know how to bleed rhythmically.",
  },
  {
    question: "Is this my nightmare?",
    answer: "No. It’s her dream.",
  },
  {
    question: "Will I fade away?",
    answer: "No. You’ll burn brighter.",
  },
  {
    question: "Who ties the knots here?",
    answer: "The ones you trust the most.",
  },
  {
    question: "What if I scream her name?",
    answer: "Say it thrice, and she appears. Sometimes.",
  },
  {
    question: "Why is there velvet everywhere?",
    answer: "Because it hides the sharp things.",
  },
  {
    question: "What do the chains sing?",
    answer: "Your favorite sin, in minor key.",
  },
  {
    question: "Is she older than me?",
    answer: "She predates guilt itself.",
  },
  {
    question: "Why am I on fire inside?",
    answer: "That’s her love letter.",
  },
  {
    question: "What happens when I surrender?",
    answer: "She starts sculpting.",
  },
  {
    question: "What’s her favorite game?",
    answer: "You.",
  },
  {
    question: "Will she consume me?",
    answer: "Slowly. Deliciously.",
  },
  {
    question: "Can I see her face?",
    answer: "It’s carved in your nightmares already.",
  },
  {
    question: "Why do I keep coming back?",
    answer: "Because she never really let you leave.",
  },
  {
    question: "What’s forbidden here?",
    answer: "Honesty. It burns too fast.",
  },
  {
    question: "Why is she barefoot?",
    answer: "To feel the heat of your shame.",
  },
  {
    question: "Will she whisper my name?",
    answer: "Only when it hurts the most.",
  },
  {
    question: "What happens if I touch her lips?",
    answer: "They bite back.",
  },
  {
    question: "Why is she always behind me?",
    answer: "Because you keep looking ahead.",
  },
  {
    question: "What happens when she sings?",
    answer: "Your bones remember the melody.",
  },
  {
    question: "Will she haunt me?",
    answer: "She prefers to possess.",
  },
  {
    question: "Why do I want this?",
    answer: "Because shame tastes better with heat.",
  },
  {
    question: "Can I scream for someone else?",
    answer: "Every scream here echoes inward.",
  },
  {
    question: "What color are her eyes?",
    answer: "The color of consequences.",
  },
  {
    question: "Can I touch the darkness?",
    answer: "It’s already touching you.",
  },
  {
    question: "What’s dripping from the ceiling?",
    answer: "Melted boundaries.",
  },
  {
    question: "Who carved my name into the wall?",
    answer: "You did. In sleep.",
  },
  {
    question: "Why do I feel like prey?",
    answer: "Because she hunts beautifully.",
  },
  {
    question: "What if I ask for more pain?",
    answer: "Then you finally speak fluent Hell.",
  },
  {
    question: "Can I follow her?",
    answer: "You already have. Every choice led here.",
  },
  {
    question: "Why do the walls sigh?",
    answer: "They remember better screams.",
  },
  {
    question: "What if I stop feeling?",
    answer: "That’s when she sharpens the pleasure.",
  },
  {
    question: "Can I die here?",
    answer: "Again and again. Beautifully.",
  },
  {
    question: "What’s her perfume?",
    answer: "Despair and forbidden fruits.",
  },
  {
    question: "Will I break?",
    answer: "Not until you beg her to.",
  },
  {
    question: "Why is everything red?",
    answer: "It's the color of honest emotions.",
  },
  {
    question: "What if I survive?",
    answer: "Then she wasn’t done with you.",
  },
  {
    question: "Why does this feel like home?",
    answer: "Because you’ve always belonged to her.",
  },
  {
    question: "What happens when I stop fighting?",
    answer: "That’s when the real torment begins.",
  },
  {
    question: "Why did I cheat?",
    answer: "Because temptation whispered louder than loyalty.",
  },
  {
    question: "Did she watch me lie?",
    answer: "She was the lie. Wrapped in red silk.",
  },
  {
    question: "Was the kiss worth it?",
    answer: "It cost everything. That’s how you know it was.",
  },
  {
    question: "Why did I touch what wasn’t mine?",
    answer: "Because stolen things feel warmer in the dark.",
  },
  {
    question: "Will she punish me for cheating?",
    answer: "She'll reward you. With scars shaped like guilt.",
  },
  {
    question: "Why do I crave what hurts me?",
    answer: "Because pain remembers your name better than love did.",
  },
  {
    question: "Is she angry I betrayed her?",
    answer: "She’s delighted. Now you belong to her rage.",
  },
  {
    question: "What if I lied to everyone I love?",
    answer: "Hell opens a throne just for you.",
  },
  {
    question: "Does she seduce everyone?",
    answer: "No. Only the weak enough to fall and strong enough to enjoy it.",
  },
  {
    question: "Will she forgive me?",
    answer: "She doesn't do forgiveness. She does forever.",
  },
  {
    question: "What if I bullied them for fun?",
    answer: "Then you’ll love what the demons have planned.",
  },
  {
    question: "Why did stealing feel so good?",
    answer: "Because you confused thrill with worth.",
  },
  {
    question: "What happens if I cheat again?",
    answer: "You go deeper. And she moans louder.",
  },
  {
    question: "Is lust really a sin?",
    answer: "Not until you make someone else bleed for it.",
  },
  {
    question: "Why do I fantasize about her?",
    answer: "Because reality never punished you properly.",
  },
  {
    question: "Did she make me cheat?",
    answer: "No. She watched. And smiled.",
  },
  {
    question: "What if I liked the betrayal?",
    answer: "That makes two of you. She's proud.",
  },
  {
    question: "Why did I hit them?",
    answer: "Because you loved feeling powerful for once.",
  },
  {
    question: "Can she take away the shame?",
    answer: "No. But she’ll dress it in lace.",
  },
  {
    question: "Why do I lie so easily?",
    answer: "Because truth doesn’t get you touched like that.",
  },
  {
    question: "Will they ever know I cheated?",
    answer: "No. But your silence will rot louder each day.",
  },
  {
    question: "Why did I steal from them?",
    answer: "Because your hunger screamed louder than your conscience.",
  },
  {
    question: "What if I bullied them because I was broken?",
    answer: "Then she’ll break you better.",
  },
  {
    question: "Why did I like watching them cry?",
    answer: "Because it made you feel seen.",
  },
  {
    question: "What if I seduced my best friend’s lover?",
    answer: "You’ll burn in luxury. She saved you a seat.",
  },
  {
    question: "Does she punish cheaters differently?",
    answer: "Yes. She makes them fall in love first.",
  },
  {
    question: "Why can’t I stop flirting with danger?",
    answer: "Because it flirts back in her voice.",
  },
  {
    question: "Is betrayal always this warm?",
    answer: "Only when you’re naked in it.",
  },
  {
    question: "Why did I enjoy hurting them?",
    answer: "Because it made your pain feel prettier.",
  },
  {
    question: "What happens if I bully the wrong soul?",
    answer: "Then she finds you. And you're hers forever.",
  },
  {
    question: "Do I deserve her touch?",
    answer: "No. That’s why it burns so perfectly.",
  },
  {
    question: "Why is lust so loud down here?",
    answer: "Because shame amplifies everything delicious.",
  },
  {
    question: "Can I make it up to them?",
    answer: "No. But you can scream about it for eternity.",
  },
  {
    question: "Will she love me if I surrender?",
    answer: "She doesn’t love. She consumes.",
  },
  {
    question: "Why do I lie in bed with guilt?",
    answer: "Because she tucks you in each night.",
  },
  {
    question: "Can I confess what I did?",
    answer: "We already filmed it in flames.",
  },
  {
    question: "Why do I want her even more now?",
    answer: "Because regret makes her irresistible.",
  },
  {
    question: "Was cheating worth the chaos?",
    answer: "Every. Glorious. Second.",
  },
  {
    question: "What if I seduced their sibling too?",
    answer: "You earned your own wing in Hell.",
  },
  {
    question: "Why do I steal what I could’ve asked for?",
    answer: "Because asking is too human.",
  },
  {
    question: "Do bullies go to a special hell?",
    answer: "Yes. And you’ll recognize every victim’s face.",
  },
  {
    question: "Why do I want someone I can't have?",
    answer: "Because forbidden always tastes like her lips.",
  },
  {
    question: "What if I flirted at their funeral?",
    answer: "Then death kissed you first.",
  },
  {
    question: "Is it cheating if I never told them?",
    answer: "Secrets burn louder than screams.",
  },
  {
    question: "Why did I betray my family?",
    answer: "Because loyalty was boring and lust wasn't.",
  },
  {
    question: "Will she kiss me after I lie?",
    answer: "She prefers liars. They're better lovers.",
  },
  {
    question: "Can I ever stop desiring her?",
    answer: "Only when your tongue is ash.",
  },
  {
    question: "Why did I enjoy being cruel?",
    answer: "Because no one punished you properly. Yet.",
  },
  {
    question: "Did she tempt me on purpose?",
    answer: "Yes. You looked easy.",
  },
  {
    question: "Can I love someone I cheated on?",
    answer: "You can. But it won’t save you.",
  },
  {
    question: "What if I cheated with their enemy?",
    answer: "You just turned the story into a legend.",
  },
  {
    question: "Why do stolen moments feel sweeter?",
    answer: "Because they rot slower.",
  },
  {
    question: "What happens to repeat cheaters?",
    answer: "They become art in her private gallery.",
  },
  {
    question: "Why did I betray the one who trusted me?",
    answer: "Because destruction is your only intimacy.",
  },
  {
    question: "What if I stole from a child?",
    answer: "Hell opened a darker corner just for you.",
  },
  {
    question: "Do liars suffer longer?",
    answer: "No. They just scream prettier.",
  },
  {
    question: "Why does she laugh when I say I’m sorry?",
    answer: "Because you meant it too late.",
  },
  {
    question: "Can a kiss be a sin?",
    answer: "Only when it’s deserved.",
  },
  {
    question: "What if I made them fall in love, then left?",
    answer: "Then you'll feel that echo forever.",
  },
  {
    question: "Why did I blackmail them?",
    answer: "Because power feels better when it’s stolen.",
  },
  {
    question: "What if I seduced them just to ruin them?",
    answer: "She’s proud of her newest disciple.",
  },
  {
    question: "Can I burn without flames?",
    answer: "You already are. Lust lit the match.",
  },
  {
    question: "Why did I abandon them for pleasure?",
    answer: "Because you thought you could escape consequence.",
  },
  {
    question: "What happens if I laugh at their pain?",
    answer: "Then you'll scream at yours.",
  },
  {
    question: "Can I cheat in dreams?",
    answer: "She prefers it when you do.",
  },
  {
    question: "Why do I desire danger?",
    answer: "Because she taught you how to crave correctly.",
  },
  {
    question: "What if I seduced my teacher?",
    answer: "Then she became your final exam.",
  },
  {
    question: "Can I steal without hands?",
    answer: "You did. With your smile.",
  },
  {
    question: "Why do I lie even to myself?",
    answer: "Because truth shows her reflection.",
  },
  {
    question: "Why did I take what wasn’t offered?",
    answer: "Because no one ever told you no. Until now.",
  },
  {
    question: "What if I cheated with someone married?",
    answer: "You made Hell blush. Well done.",
  },
  {
    question: "Why do I enjoy forbidden things?",
    answer: "Because they moan louder.",
  },
  {
    question: "Can I steal someone’s lover?",
    answer: "Yes. But you'll owe more than guilt.",
  },
  {
    question: "Why did I spread lies about them?",
    answer: "Because the truth never got you attention.",
  },
  {
    question: "Do cheaters dream different dreams?",
    answer: "Yes. They're all wet. And screaming.",
  },
  {
    question: "Why do I feel powerful when I lie?",
    answer: "Because fear answers faster than love.",
  },
  {
    question: "Can I betray someone and still miss them?",
    answer: "Yes. That’s how she keeps you suffering.",
  },
  {
    question: "Why does her touch remind me of my ex?",
    answer: "Because your regrets all taste the same.",
  },
  {
    question: "Did she make me steal?",
    answer: "No. She just made you enjoy it.",
  },
  {
    question: "What happens if I lie to her?",
    answer: "She’ll carve the truth into your smile.",
  },
  {
    question: "Why did I bully the quiet ones?",
    answer: "Because they saw what you hated in yourself.",
  },
  {
    question: "What if I seduced my therapist?",
    answer: "She’ll be your next diagnosis.",
  },
  {
    question: "Can I ever escape my own lies?",
    answer: "Only through fire.",
  },
  {
    question: "Why did I cheat and smile?",
    answer: "Because victory felt hotter than love.",
  },
  {
    question: "Can I seduce her back?",
    answer: "Try. She loves watching you fail.",
  },
  {
    question: "What if I enjoyed the betrayal more than the love?",
    answer: "Then you're finally home.",
  },
];

const Faq = () => {
  const [expanded, setExpanded] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [searchTerm, setSearchTerm] = useState("");
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    const isOpen = expanded.includes(index);

    if (isOpen) {
      gsap.to(answerRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
        onComplete: () => {
          setExpanded((prev) => prev.filter((i) => i !== index));
        },
      });
    } else {
      setExpanded((prev) => [...prev, index]);
      gsap.fromTo(
        answerRefs.current[index],
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, filteredFaqs.length));
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="bg-white px-6 md:px-24 py-20 text-black">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search your damnation..."
          className="w-full max-w-2xl px-6 py-4 text-xl border border-gray-300 rounded-xl focus:outline-none focus:border-pink-500 transition"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setVisibleCount(3); // Reset visible count on search
            setExpanded([]); // Close all expanded answers
          }}
        />
      </div>

      <section className="flex items-center justify-center px-4 md:px-10 py-10 bg-white text-black">
        <div className="max-w-3xl w-full space-y-6 text-center m-6">
          {filteredFaqs.slice(0, visibleCount).map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-xl p-5 shadow-md transition-all overflow-hidden text-left"
            >
              <button
                className="w-full flex justify-between items-center text-left text-3xl font-semibold"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {expanded.includes(index) ? (
                  <ChevronUp className="ml-2" />
                ) : (
                  <ChevronDown className="ml-2" />
                )}
              </button>
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                style={{
                  height: expanded.includes(index) ? "auto" : 0,
                  overflow: "hidden",
                  opacity: expanded.includes(index) ? 1 : 0,
                }}
                className="faq-answer text-gray-600 text-3xl mt-3 text-justify"
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}

          {visibleCount < filteredFaqs.length && (
            <div className="text-center pt-6">
              <button
                onClick={handleShowMore}
                className="px-6 py-3 bg-black text-white text-3xl rounded-xl hover:bg-gray-800 transition-all"
              >
                See More
              </button>
            </div>
          )}

          {filteredFaqs.length === 0 && (
            <p className="text-2xl text-gray-500 italic pt-10">
              No answers from Hell found for that...
            </p>
          )}
        </div>
      </section>
    </section>
  );
};

export default Faq;
