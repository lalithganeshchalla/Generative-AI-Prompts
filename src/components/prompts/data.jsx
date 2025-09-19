import Boys1 from '../../assets/BoysRetroPrompts1.png';
import Boys2 from '../../assets/Boys Retro Prompts 2.png';
import Girl1 from '../../assets/girl1.jpg';
//import Girl2 from '../../assets/girl2.jpg';
import Coples1 from '../../assets/coples1.jpg';

const cardsData = [
  {
    img: require('../../assets/couple3.png'),
    tag: "couples",
    text: "Use a 90s Bollywood cinema style to turn this couple's shot into a grainy, bright, retro, and vintage image. The male is clutching the woman's hand while sporting a black shirt that seems ancient. Her crimson chiffon saree is flawless. With warm, golden sunset tones and a minimalist, slightly textured background, the landscape is romanticised and breezy. Their facial expressions are quietly joyful, serene, and gloomy."
  },
  {
    img: require('../../assets/boy11.png'),
    tag: "men",
    text: "Using the image above as a guide, take a sophisticated photograph of a man standing in the rain under a streetlight while wearing a trench coat and a hat. The image has a grainy, good quality and is in high contrast black and white."
  },
  {
    img: require('../../assets/boy10.png'),
    tag: "men",
    text: "Using the image above as a guide, draw a vintage image of a man carrying a bat while wearing a traditional baseball uniform. Like an old sports card, the black-and-white image exudes strength and heroism."
  },
  {
    img: require('../../assets/boy9.png'),
    tag: "men",
    text: "Using the image above as a guide, draw a vintage image of a man carrying a bat while wearing a traditional baseball uniform. Like an old sports card, the black-and-white image exudes strength and heroism."
  },
  {
    img: require('../../assets/boy8.png'),
    tag: "men",
    text: "Profile photo of me holding a red and white Nike Premier League football on my forehead while I am focused intently on the ceiling. I have a confident, lengthened neck, softly closed lips, and a little elevated chin. The athletic and concentrated appearance is further enhanced by the fact that I am dressed in a professional football uniform, which includes a tailored jersey and shorts.  The ball and my attire stand out sharply against the solid, deep blue background. The dramatic lighting highlights the ball's spherical shape and creates gentle shadows on my jawline. Shown in full colour. The same face."
  },
  {
    img: require('../../assets/boy7.png'),
    tag: "men",
    text: "sunglasses, white trousers, loafers and a navy blue shirt. Action: Holding a girl in his arms while adjusting his sunglasses with one hand. Setting: A balcony on the beach with waves in the background. Mood: airy, romantic, and refreshing."
  },
  {
    img: require('../../assets/boy6.png'),
    tag: "men",
    text: "Create a 3:4 full-body, above, high-angle photograph of a man lounging on the hood of a red Lamborghini Urus in a dark underground garage. Sporting a leather strap watch, brown trousers, polished black shoes and a clean white open-collar shirt. There is a tattoo on the forearm. Shallow depth of field, creamy bokeh, hyper-realistic 8K detail, cinematic warm colour grading, soft sunbeam lighting with natural reflections on the car, and a millionaire vibe."
  },
  {
    img: require('../../assets/boy5.jpg'),
    tag: "men",
    text: "A hyper detailed 4K vertical realistic portrait (aspect ratio 9:16) using 100% of the faces from the uploaded photos, with no change in jawline, or face shape. A highly detailed, photorealistic image of a person standing in a vast, dense field of vibrant purple flowers. The person's posture is one of complete surrender and serenity. Their head is tilted back and slightly to their right, with eyes closed and a peaceful, blissful expression on their face. Their right arm is extended straight out to the side and angled slightly upwards, with the palm of the hand open and facing the sky. Their left arm is also extended straight out to the side but is angled slightly downwards, with the palm of the hand also open and facing upwards, creating a mirrored, balanced pose. The person is wearing modern, silver over-ear headphones. They are dressed in a dark charcoal or black long-sleeved, button-down shirt with the collar open and a simple silver chain necklace visible. The environment is dramatic. The sky above is filled with lots of dark, moody, overcast clouds, suggesting an approaching storm, but a soft, diffused light illuminates the person, making them the focal point. Small, delicate purple petals are frozen in motion, gently falling through the air around them. The overall mood of the image is one of profound peace, freedom, and an immersive connection to music and nature."
  },
  {
    img: require('../../assets/girl9.jpg'),
    tag: "women",
    text: "A hyper-detailed 4K vertical realistic portrait (aspect ratio 9:16) using 100% of the woman’s face from the uploaded photo, with no change to her jawline or face shape. A highly detailed, photorealistic image of a woman standing in a vast, dense field of vibrant purple flowers. Her posture is one of complete surrender and serenity. Her head is tilted back and slightly to her right, eyes closed with a peaceful, blissful expression on her face. Her right arm is extended straight out to the side and angled slightly upwards, palm open and facing the sky. Her left arm is also extended straight out to the side but angled slightly downwards, palm open and facing upwards, creating a mirrored, balanced pose. he is wearing modern, silver over-ear headphones. She is dressed in a dark charcoal or black saree with subtle silver borders that drapes naturally, with a simple silver chain necklace visible. he environment is dramatic: the sky above is filled with dark, moody, overcast clouds, suggesting an approaching storm. Soft, diffused light illuminates her, making her the focal point. Small, delicate purple petals are frozen in motion, gently falling through the air around her. The overall mood of the image is one of profound peace, freedom, and an immersive connection to music and nature."
  },
  {
    img: require('../../assets/girl8.jpg'),
    tag: "women",
    text: "A cinematic film still of a young woman lying horizontally on her side in a field of small white flowers. Her head is turned slightly toward the camera, resting among the blossoms, with long, wavy dark brown hair framing her face. Do not alter her face, features, or expression-keep her natural look with no additional makeup. Captured from a side view close-up, with shallow depth of field, soft natural lighting, warm tones, and a dreamy, romantic atmosphere, like a scene from an art film"
  },
  {
    img: require('../../assets/girl7.jpg'),
    tag: "women",
    text: "Hyper-realistic overhead 9:16 close-up of myself with glasses, playfully leaning against an ivy-covered stone wall of an old countryside cottage during golden hour. I'm laughing with my head slightly tilted back, one hand brushing away a dangling vine, wearing a textured earth-tone knit sweater layered over a soft white t-shirt. The flowering vines are in full bloom with orange, magenta, and lavender hues, softly blurred in the foreground."
  },
  {
    img: require('../../assets/girl6.jpg'),
    tag: "women",
    text: "Create a portrait of the above reference with a serene expression, where the girl looks like Radha with maroon very long wavy hair flying & minimal kolka art in the forehead a peacock feather in her very long hair. She's wearing a pink and white contrast chiffon lehenga along with golden jewellery add a flute in her hand Keep the background solid white wall. Also, background is minimal, lit with a gradient of warm blue and warm red Hd neon light reflecting on the picture, creating a dreamy and cinematic aesthetic golden hour glow warm toned and shadow. The image has a professional portrait photography vibe, with smooth skin tones, sharp details, and a slight retro vintage touch. Keep the face"
  },
  {
    img: require('../../assets/boy4.jpg'),
    tag: "men",
    text: "Create a giant hyper-realistic statue based on the given photo, keeping the original face exactly the same without changes. The statue stands tall in the middle of a roundabout in banglore, near a famous historical landmark. The statue is 90% completed, with most of its structure detailed and finished, while the remaining 10% is still under construction, surrounded by scaffolding. A few construction workers in yellow helmets and orange vests are welding, climbing, and finishing the final sections. Only some small exposed metal framework is visible on the unfinished part. The background shows the realistic atmosphere of kerala City: crowded streets with colorful rickshaws, packed buses, and small cars circling the roundabout. Street vendors with tea stalls, fruit carts, and colorful umbrellas line the roadside. Shop signs, big billboards. and messy hanging electric wires crisscross above the streets, creating the typical keralacity vibe. The brigh daytime sky shines above, with tropical trees and a bustling, lively atmosphere."
  },
  {
    img: require('../../assets/boy3.jpg'),
    tag: "men",
    text: "A cinematic, moody photograph of a young man standing in a lush green field of tall grass under a cloudy, overcast sky. He is wearing a loose, dark button-up shirt and dark trousers. His posture is expressive and dramatic, leaning slightly backward with one arm outstretched and palm open, as if embracing the wind or the moment. His head is tilted back, eyes closed, and he is wearing large, over-ear silver headphones, giving a sense of calm and emotional release The perspective is slightly low-a"
  },
  {
    img: require('../../assets/couple2.jpg'),
    tag: "Couples",
    text: "Make this couple a retro look 4K HD realistic image of girl sitting in the bench with open wavy hair and wearing blue printed saree by opening a book and smiling by seeing the book and the man in white kurta pajama holding womans white flower in ear"

  },
  {
    img: require('../../assets/girl5.jpg'),
    tag: "Women",
    text: "Create a 9.6retro vintage grainy but bright mage of the reference picture but draped in a perfect small flower printed Pinteresty aesthetic bouffant dress with square neck. It must feel like a korean movie long hair with small small flowers tuck in the curls and windy environment romanticising. The girl is standing against a plain wall bathed in warm natural with a triangular patch of sunlight casting artistic shadows, he ia holding a sunflower bouquet in her hand, creating a mysterious"
  },
  {
    img: require('../../assets/girl4.jpg'),
    tag: "Women",
    text: "A perfect flower chiffon white color pinteresty aesthetic retro saree It must feel like a 90s movie dark brown wavy curly hair with a small flower tucked visibly into her curls.the girl is standing against a solid wall deep shadows and contrast drama lotus flower bookay in her hand while rose petals are showering on her and creating a mysterious and artistic atmosphere where the lighting is worm a golden tones of evoking a sunset or golden hour glow please do not change the face"
  },
    {
    img: Boys1,
    tag: "Men",
    text: "Create a retro, vintage-inspired image grainy yet bright - based on the reference picture. The boy should be dressed in a perfect red, Pinterest-style aesthetic retro kurta. The vibe must capture the essence of a 90s movie brown-haired baddie, with wavy curls, enhanced by a windy, romantic atmosphere. He stands against a solid wall, where deep shadows and dramatic contrasts add mystery and artistry to the scene, creating a moody yet enchanting cinematic effect."
  },
  {
    img: Girl1,
    tag: "Women",
    text: "Create a retro, vintage-inspired image grainy yet bright - based on the reference picture. The boy should be dressed in a perfect red, Pinterest-style aesthetic retro kurta. The vibe must capture the essence of a 90s movie brown-haired baddie, with wavy curls, enhanced by a windy, romantic atmosphere. He stands against a solid wall, where deep shadows and dramatic contrasts add mystery and artistry to the scene, creating a moody yet enchanting cinematic effect."
  },
  {
    img: Coples1,
    tag: "Couples",
    text: "Create a retro, vintage-inspired image grainy yet bright based on the reference picture. The girl should be draped in a perfect off-white cotton saree with a red blouse. Pinterest-style aesthetic saree. The vibe must capture the essence of a 90s movie dark brown-haired baddie, enhanced by a windy, romantic atmosphere and the guy should be wearing an off white kurta She stands against an old wooden door, where deep shadows and dramatic contrasts add mystery and artistry to the scene, creating a moody yet enchanting cinematic effect. Make the girl pose like she's walking and looking back while the guy is holding her saree pallu very evidently and the guy should be looking at the girl."
  },
  {
    img: Boys2,
    tag: "Men",
    text: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect plain kurta yellow color Pinteresty aesthetic retro kurta. It must feel like a 90s movie dark brown wavy curly hair and romanticising windy environment. The boy is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. The background is minimalist and slightly textured the expression on his face is moody, calm yet happy and introspective."
  },

];

export default cardsData;