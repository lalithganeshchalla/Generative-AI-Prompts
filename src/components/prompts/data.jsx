

const cardsData = [
  {
    img: require('../../assets/girl11.png'),
    tag: "women",
    text: "Cinematic, hyper-realistic full body shot: me(use my face with accurate 100%) on a vintage park bench under warm streetlight at golden hour, focused on smartphone. Light purple oversized shirt, beige trousers, sneakers, tousled hair, glasses, leather watch; flower bouquet beside. Lush blooms, cherry tree, dramatic golden clouds, creamy bokeh foreground, cable overhead. Likes 8K, RAW, shallow depth, warm highlights/teal shadows, vivid textures. 100% face match."
  },
  {
    img: require('../../assets/girl10.png'),
    tag: "women",
    text: "A medium shot portrait featuring you in a structured white shirt against a seamless white backdrop. The innovative composition uses multiple angled mirror fragments positioned around you, creating a cubist-like fragmentation of your face and upper body. Each mirror reflects a different angle of you simultaneously, with high-contrast black and white processing highlighting the experimental, boundary-pushing aesthetic that Avedon developed for his Harper's Bazaar work."
  },
  {
    img: require('../../assets/boy21.png'),
    tag: "men",
    text: "Create a retro vintage grainy but bright image of the reference picture but draped in a perfect red wine color Pinteresty aesthetic retro shirt with white pant and holding a rose flower in hands. It must feel like a 90s movie and romanticising windy environment. The boy is standing against a solid wall deep shadows and contrast drama, creating a mysterious and artistic atmosphere where the lighting is warm with a golden tones of evoking a sunset or golden hour glow. Likes The background is minimalist and slightly textured the expression on"
  },
  {
    img: require('../../assets/boy20.png'),
    tag: "men",
    text: "To take this young Indian boy photo reference and generate image effectively and cinematic look he have skinny personality he is wearing un button lite colour pink shirt and and cream colour cargo pant and he wearing watch small silver chain his neck he slidely sitting on a boat and giving best pose the boat in a river the river Full of Lotus flowers and he using headset and enjoying music to little closed eyes to seeing the sky he is wearing white colour stylish shoes."
  },
  {
    img: require('../../assets/boy19.png'),
    tag: "men",
    text: "Use face image, Detailed close-up of a man hidden among flowering branches. Half his face shows one hazel green eye, and sun-kissed skin. White flowers with orange-yellow stamens and green leaves frame his face, some sharp, some blurred. and soft natural light highlight her skin. Use the exact same face. 4K, 8K."
  },
  {
    img: require('../../assets/boy18.png'),
    tag: "men",
    text: "A cinematic, realistic portrait of luploaded image sitting on a simple chair placed in the shallow water of a calm lake, He is wearing a slightly open white shirt with rolled-up sleeves and light beige trousers, wet from the water, He holds an open book in his hands and a single red rose resting on his arm, adding a poetic touch. His curly hairstyle is natural and stylish. The background shows misty hills and a soft cloudy sky, creating a dreamy, moody, and aesthetic vibe. The water gently ripples around the chair, reflecting light, Highly detailed, realistic lighting, natural colors, soft depth of field."
  },
  {
    img: require('../../assets/boy17.png'),
    tag: "men",
    text: "A hyper-realistic 1/7 scale figurine of neymar in FC Barcelona Home jersey #11, mid-action pose, on a round acrylic base with green turf. Scene: modern desk in a cinematic studio, warm dramatic lighting, toy collections softly blurred in background. Nearby, the referenced person in a FC Barcelona Home jersey carefully brushes the figurine. Premium, polished, filmic atmosphere with deep contrasts."
  },

  {
    img: require('../../assets/boy16.png'),
    tag: "men",
    text: "A vertical 9:16 high-resolution 8K vintage-style flash photograph of a stylish white man standing confidently on a nighttime city street, captured with dramatic fisheye lens distortion. The image includes subtle grain, light film scratches, and analog texture effects for a nostalgic yet editorial feel. He wears an abstract red shirt with bold, expressive artistic patterns, partially unbuttoned to reveal his confident, edgy demeanor. Chunky metallic jewelry and fashionable sunglasses add to his striking streetwear aesthetic. The city backdrop is softly transformed by cozy home party vibes red ambient lighting, delicate string lights hanging above, and a warm, intimate atmosphere that blends festivity with the urban night setting. Skin texture is flawless, lighting is dramatic with soft shadows and lens flash reflections. No distortions, no anatomical flaws. Image must be generated entirely based on the uploaded photo, maintaining all the characteristics of the main character, with perfect skin texture, 8K quality, and an extremely high level of realism."
  },

  {
    img: require('../../assets/boy15.png'),
    tag: "men",
    text: "A hyper-realistic cinematic editorial portrait of the uploaded person (preserve face 100%). Α stylish 18 year young boy sitting thoughtfully at a modern café table. He wears a light blue and white striped shirt with the sleeves casually rolled up, white pants, and glossy black lace-up boots. His legs are crossed, and one hand rests on the table. The café interior features a cool-toned design with deep blue accents, a gray and white terrazzo floor, large green potted plants."
  },
  {
    img: require('../../assets/boy14.png'),
    tag: "men",
    text: "Use the uploaded reference image as the main base. Ultra-realistic cinematic portrait of a young man standing near glowing string lights at night. The man is wearing a stylish black kurta, softly smiling and gazing looking ahead with a expression, standing in style. Background is dark and blurred, with warm golden bokeh lights creating a festive, magical atmosphere. Lighting is warm, glowing, and softly illuminating the face, with smooth shadows and depth of field for a professional."
  },
  {
    img: require('../../assets/boy13.png'),
    tag: "men",
    text: "A hyperrealistic cinematic photograph capturing a fleeting, intimate moment on a dimly lit underground subway platform. The central subject is a stunning young Asian man, body positioned at a slight slant angle not fully in profile and not fully frontal with his face turned slightly, giving a subtle intrigue. His face, hairstyle, and eyeglasses remain exactly the same as in the attached reference photo, with a direct, piercing gaze into the camera. He stands perfectly still, a serene figure amidst the chaos, dressed in an elegant long black coat. In stark contrast, a vibrant yellow train rushes past in the background, its speed rendered as a brilliant, dynamic streak of motion blur. The scene is enveloped in warm, moody atmospheric lighting from the station, casting soft golden glows onto the arched tiled ceiling. The composition showcases a masterful use of slow shutter speed, freezing the subject in clarity while capturing the restless energy of the city. The focus is tack-sharp on the man's face, creating a powerful emotional anchor in the frame. Ultra-detailed realism, cinematic depth, professional fashion editorial qualit"
  },
  {
    img: require('../../assets/boy12.png'),
    tag: "men",
    text: "Take the face from the uploaded reference photo exactly 100% the same (do not alter his facial features, keep his identity intact). Create a cool young man with wavy, vintage-style hair, clean-cut look, wearing a white t-shirt and light-colored jeans. He is sitting comfortably on a wooden crate, looking to the right while holding a denim jacket. The background features a smoky blue-and-red effect blended into a bright black studio scene, creating a dramatic and stylish atmosphere."
  },
  {
    img: require('../../assets/animal1.png'),
    tag: "animals",
    text: "Make a little, Miniature 3D model of this dog. The model should be placed on a desk next to birthday presents that provide the impression that the model was opened as a present."
  },
  {
    img: require('../../assets/kid1.png'),
    tag: "kids",
    text: "Take the face from the attached reference photo exactly 100% the same (do not alter his facial features, keep his identity intact). He is a kid. Create a retro, vintage-inspired, grainy yet bright image where the boy is dressed in a perfect black suit with Pinterest-style retro pants. The mood should feel like a 90s movie hair baddie. He holds a bunch of red roses in one hand while the other hand rests in his pocket, romanticizing a windy environment. The young boy stands against a solid deep shadow with dramatic contrast, evoking mystery and artistry. The lighting must be warm and golden, resembling a sunset or golden hour glow."
  },
  {
    img: require('../../assets/kid2.png'),
    tag: "kids",
    text: "Take the face from the attached photo , same 100% same , he is a kid  A stylish kid in a sleek, all-white outfit poses confidently against a pitch-white house background. He wears a tailored white suit, a white shirt with the top buttons open, and a subtle silver chain around his neck. He sports white sunglasses , exuding charisma and mystery. A luxury wristwatch glints on his left wrist. The lighting is dramatic, highlighting his facial features and casting soft shadows, creating a bold, high-fashion editorial look."
  },
  {
    img: require('../../assets/kid3.png'),
    tag: "kids",
    text: "Take the face from the attached photo , same 100% same , he is a kid A stylish kid, facial will be the same as the reference image, with sharp features and dark tousled hair parted naturally. He is leaning casually against a vintage suitcase. He wears a textured brown blazer over an open-collar dark brown shirt, slightly unbuttoned at the top, paired with high-waisted light beige pleated trousers and a dark belt. The aesthetic is elegant and retro-inspired, with earthy tones. Minimalistic indoor background, cinematic warm natural lighting"
  },
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

];

export default cardsData;