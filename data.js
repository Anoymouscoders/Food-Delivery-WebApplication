const restaurantsData = {
    1: {
        name: "The Curry House",
        categories: ["Indian", "North Indian"],
        items: [
            { id: "ch01", name: "Butter Chicken", desc: "Tender chicken in a creamy tomato sauce.", price: 350, img: "https://b.zmtcdn.com/data/dish_photos/887/c7dd8034e783f108b41b0f51dd69c887.jpg" },
            { id: "ch02", name: "Palak Paneer", desc: "Spinach and cottage cheese curry.", price: 280, img: "https://b.zmtcdn.com/data/dish_photos/769/a40f3b0c619195b003a2f3f15c1b6769.jpg", deal: true }, // DEAL ITEM
            { id: "ch03", name: "Chicken Tikka Masala", desc: "Grilled chicken chunks in a spiced sauce.", price: 360, img: "https://b.zmtcdn.com/data/dish_photos/c42/e5c701f016d8a25c156f080b8b1a8c42.jpg" },
            { id: "ch04", name: "Dal Makhani", desc: "Creamy black lentils and kidney beans.", price: 250, img: "https://b.zmtcdn.com/data/dish_photos/c69/ae4e126a88b5c9a9a3ea77c4e5108c69.jpg" },
            { id: "ch05", name: "Vegetable Biryani", desc: "Aromatic basmati rice with mixed vegetables.", price: 300, img: "https://b.zmtcdn.com/data/dish_photos/a69/59aed7913f0c7634f59e1f57f5c7fa69.jpg" },
            { id: "ch06", name: "Samosa (2 pcs)", desc: "Crispy pastry filled with spiced potatoes.", price: 120, img: "https://b.zmtcdn.com/data/dish_photos/c1d/8f52f7596d11f71c4c111005f01aac1d.jpg" },
            { id: "ch07", name: "Naan Bread", desc: "Soft, oven-baked flatbread.", price: 40, img: "https://b.zmtcdn.com/data/dish_photos/b6c/0e8c87f9180a0a56e077a9b0c034bb6c.jpg" },
            { id: "ch08", name: "Gulab Jamun", desc: "Sweet milk solids dumplings in syrup.", price: 90, img: "https://b.zmtcdn.com/data/dish_photos/06f/1c97a2c0c80d473468595a86f1e8e06f.jpg" },
            { id: "ch09", name: "Mango Lassi", desc: "Refreshing yogurt drink with mango.", price: 80, img: "https://b.zmtcdn.com/data/dish_photos/8cb/3c5017006856d56f34586b033a39e8cb.jpg" },
            { id: "ch10", name: "Rogan Josh", desc: "Aromatic lamb curry with a rich gravy.", price: 400, img: "https://b.zmtcdn.com/data/dish_photos/80a/17a6a4c6a6f7b1968848f2c69469780a.jpg" },
            { id: "ch11", name: "Punjabi Thali (North Indian)", desc: "Hearty platter with dal makhani, paneer/chicken curry, rice, roti, raita, and salad.", price: 450, img: "https://b.zmtcdn.com/data/dish_photos/b23/9151596781f21183149a46a782a20b23.jpg" },
            { id: "ch12", name: "South Indian Thali", desc: "Flavorful mix including sambar, rasam, avial, poriyal, rice, papad, and pickle.", price: 380, img: "https://b.zmtcdn.com/data/dish_photos/98e/08d13b4ea83f06dd65d08ff0a9fcc98e.jpg" },
            { id: "ch13", name: "Gujarati Thali", desc: "Sweet & savory selection with dal, kadhi, shaak, rice, roti, farsan, and dessert.", price: 420, img: "https://b.zmtcdn.com/data/dish_photos/76f/2d59cd8f6a9082dbe0f8fcf5723ab76f.jpg" },
            { id: "ch14", name: "Rajasthani Thali", desc: "Royal feast featuring dal baati churma, gatte ki sabzi, ker sangri, rice, and roti.", price: 480, img: "https://b.zmtcdn.com/data/dish_photos/c17/dfb71569992f9e4e6fcc319b0d26dc17.jpg" },
            { id: "ch15", name: "Maharashtrian Thali", desc: "Authentic flavors with pithla, bhakri, varan, bhaat, bhajis, and koshimbir.", price: 400, img: "https://b.zmtcdn.com/data/dish_photos/06c/79989a14c330f839c9a6bd8c1ef1d06c.jpg" },
            { id: "ch16", name: "Bengali Thali", desc: "Delightful assortment including shukto, dal, bhaja, fish/veg curry, rice, and mishti doi.", price: 460, img: "https://b.zmtcdn.com/data/dish_photos/357/72e1c12e847c94b7c3d115a319f39357.jpg" },
        ]
    },
    2: {
        name: "Pizza Planet",
        categories: ["Italian", "Pizza"],
        items: [
            { id: "pp01", name: "Pepperoni Pizza", desc: "Classic pizza with spicy pepperoni and mozzarella.", price: 320, img: "https://www.dominos.co.in//files/items/MicrosoftTeams-image_(20).png" },
            { id: "pp02", name: "Margherita Pizza", desc: "Simple and classic with tomatoes, mozzarella, and basil.", price: 280, img: "https://www.dominos.co.in//files/items/Margherit.jpg" },
            { id: "pp03", name: "Supreme Pizza", desc: "Loaded with pepperoni, sausage, peppers, and onions.", price: 380, img: "https://www.dominos.co.in//files/items/Farmhouse.jpg", deal: true },
            { id: "pp04", name: "Veggie Pizza", desc: "Topped with mushrooms, peppers, onions, and olives.", price: 300, img: "https://www.dominos.co.in//files/items/Digital_Veggie_Extravaganza.jpg" },
            { id: "pp05", name: "Hawaiian Pizza", desc: "A sweet and savory mix of ham and pineapple.", price: 320, img: "https://www.dominos.co.in//files/items/Fresh_Veggie.jpg" },
            { id: "pp06", name: "Garlic Bread", desc: "Toasted bread with garlic, butter, and herbs.", price: 140, img: "https://www.dominos.co.in//files/items/Garlic_bread.jpg" },
            { id: "pp07", name: "Caesar Salad", desc: "Romaine lettuce, croutons, and parmesan cheese.", price: 180, img: "https://b.zmtcdn.com/data/dish_photos/a0b/65b3823d726b2166e01a31681c6a2a0b.jpg" },
            { id: "pp08", name: "Chicken Wings (6 pcs)", desc: "Spicy buffalo wings with ranch dip.", price: 220, img: "https://www.dominos.co.in//files/items/Roasted_Chicken_Wings_Classic.jpg" },
            { id: "pp09", name: "Tiramisu", desc: "Classic Italian coffee-flavored dessert.", price: 150, img: "https://b.zmtcdn.com/data/dish_photos/e51/d4b46c63f139e530058e578a0c2e6e51.jpg" },
            { id: "pp10", name: "Coke (Can)", desc: "A cold can of Coca-Cola.", price: 40, img: "https://www.dominos.co.in//files/items/Coke.jpg" },
        ]
    },
    3: {
        name: "Burger Barn",
        categories: ["American", "Burgers", "Fried Chicken"],
        items: [
            { id: "bb01", name: "Classic Cheeseburger", desc: "Juicy beef patty with cheese, lettuce, and tomato.", price: 250, img: "https://cdn.uengage.io/uploads/28289/image-B3J6H7-1743169781.jpg" },
            { id: "bb02", name: "Bacon Burger", desc: "Beef patty, crispy bacon, and cheddar cheese.", price: 290, img: "https://b.zmtcdn.com/data/dish_photos/a5e/8a4c9b139977a4959141b7111002ca5e.jpg" },
            { id: "bb03", name: "Mushroom Swiss Burger", desc: "Topped with sautéed mushrooms and Swiss cheese.", price: 270, img: "https://b.zmtcdn.com/data/dish_photos/176/438e3f4e2f69d0c268a7a85b9e830176.jpg" },
            { id: "bb04", name: "Spicy Chicken Burger", desc: "Crispy fried chicken with a spicy mayo.", price: 260, img: "https://b.zmtcdn.com/data/dish_photos/c5f/0b93a0c7b049a888c7f070c6d320ac5f.jpg", deal: true },
            { id: "bb05", name: "Veggie Burger", desc: "A delicious plant-based patty with all the fixings.", price: 240, img: "https://b.zmtcdn.com/data/dish_photos/5f9/bfafc0116667e6c4060803d528b305f9.jpg" },
            { id: "bb06", name: "French Fries", desc: "Crispy, golden, and lightly salted.", price: 100, img: "https://b.zmtcdn.com/data/dish_photos/a13/830691e845c92c0c7f1a30f145f8fa13.jpg" },
            { id: "bb07", name: "Onion Rings", desc: "Battered and fried to perfection.", price: 120, img: "https://b.zmtcdn.com/data/dish_photos/5d1/9b98ec342b5d491f2715d2e079f4d5d1.jpg" },
            { id: "bb08", name: "Chocolate Shake", desc: "Thick and creamy chocolate milkshake.", price: 130, img: "https://b.zmtcdn.com/data/dish_photos/1b0/7099307e59c2c9d8753239a5f8be61b0.jpg" },
            { id: "bb09", name: "Side Salad", desc: "A small garden salad with your choice of dressing.", price: 90, img: "https://b.zmtcdn.com/data/dish_photos/527/655f7243b679b3e1f13f1f33f81e3527.jpg" },
            { id: "bb10", name: "Double Decker Burger", desc: "Two beef patties, extra cheese, and special sauce.", price: 350, img: "https://b.zmtcdn.com/data/dish_photos/8c1/1efd5c8230553ba878a1f6a4701e68c1.jpg" },
        ]
    },
    4: {
        name: "Sushi Spot",
        categories: ["Japanese", "Sushi", "Roll"],
        items: [
            { id: "ss01", name: "California Roll", desc: "Fresh crab, avocado, and cucumber.", price: 450, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrwBbvxjaW5WKWRzg_h3tKl7Ub0ygferv3A&s" },
            { id: "ss02", name: "Spicy Tuna Roll", desc: "Tuna, spicy mayo, and cucumber.", price: 480, img: "https://b.zmtcdn.com/data/dish_photos/011/4a1c0f16d56d9aba96b349b1a51c4011.jpg" },
            { id: "ss03", name: "Dragon Roll", desc: "Eel, crab, and cucumber, topped with avocado.", price: 600, img: "https://b.zmtcdn.com/data/dish_photos/80a/d1f85e3d7b88950d6f0c3a8e97a4780a.jpg" },
            { id: "ss04", name: "Salmon Nigiri (2 pcs)", desc: "Fresh sliced salmon over pressed vinegar rice.", price: 350, img: "https://b.zmtcdn.com/data/dish_photos/e5f/c7841c6f0c4d81228532c690d56c4e5f.jpg" },
            { id: "ss05", name: "Tuna Sashimi (5 pcs)", desc: "Slices of fresh, raw tuna.", price: 550, img: "https://b.zmtcdn.com/data/dish_photos/8b5/3a6b0c61148e651e0640dea4640108b5.jpg" },
            { id: "ss06", name: "Miso Soup", desc: "Traditional Japanese soup with tofu and seaweed.", price: 150, img: "https://b.zmtcdn.com/data/dish_photos/4c0/54a10d32f5f9223788a87b1c3e3874c0.jpg" },
            { id: "ss07", name: "Edamame", desc: "Steamed soybeans, lightly salted.", price: 200, img: "https://b.zmtcdn.com/data/dish_photos/89d/5a5a1f2982bf7c83f15a6b09333a489d.jpg", deal: true },
            { id: "ss08", name: "Shrimp Tempura Roll", desc: "Fried shrimp, avocado, and eel sauce.", price: 500, img: "https://b.zmtcdn.com/data/dish_photos/67a/7408f6c5e21966c888c3a91e5c26b67a.jpg" },
            { id: "ss09", name: "Avocado Roll", desc: "Simple and creamy avocado roll.", price: 380, img: "https://b.zmtcdn.com/data/dish_photos/039/21c56b0606b52a144b207df3a5c1b039.jpg" },
            { id: "ss10", name: "Gyoza (6 pcs)", desc: "Pan-fried pork dumplings.", price: 300, img: "https://b.zmtcdn.com/data/dish_photos/214/1723f03b5f540b79b8f2c237c35c9214.jpg" },
        ]
    },
    5: {
        name: "Taco Town",
        categories: ["Mexican", "Tacos"],
        items: [
            { id: "tt01", name: "Carne Asada Tacos (3)", desc: "Three grilled steak tacos with onion and cilantro.", price: 280, img: "https://b.zmtcdn.com/data/pictures/7/21703497/5680f83cce7d990b317084aca7977053_o2_featured_v2.jpg" },
            { id: "tt02", name: "Al Pastor Tacos (3)", desc: "Three tacos with spit-roasted pork and pineapple.", price: 260, img: "https://b.zmtcdn.com/data/dish_photos/14a/521b389f41b369c73b0a701a3511e14a.jpg" },
            { id: "tt03", name: "Chicken Quesadilla", desc: "Grilled tortilla filled with cheese and chicken.", price: 240, img: "https://b.zmtcdn.com/data/dish_photos/8f5/e82b791001a4030d35e1c028e93248f5.jpg" },
            { id: "tt04", name: "Beef Burrito", desc: "Large burrito with ground beef, rice, and beans.", price: 280, img: "https://b.zmtcdn.com/data/dish_photos/c53/074f762a4b7c1266e768c704c7d0cc53.jpg" },
            { id: "tt05", name: "Veggie Bowl", desc: "Rice, beans, fajita veggies, salsa, and guacamole.", price: 250, img: "https://b.zmtcdn.com/data/dish_photos/5b0/6232677b1f3c7e0c8152c1e7845355b0.jpg" },
            { id: "tt06", name: "Chips and Guacamole", desc: "Freshly made guacamole with crispy tortilla chips.", price: 180, img: "https://b.zmtcdn.com/data/dish_photos/f2e/b2c5513f508000a9f5d30d1d7857ff2e.jpg" },
            { id: "tt07", name: "Nachos Supreme", desc: "Chips topped with beef, cheese, sour cream, and jalapeños.", price: 300, img: "https://b.zmtcdn.com/data/dish_photos/82e/6c85822f0365773950ef3b4001c9a82e.jpg" },
            { id: "tt08", name: "Churros", desc: "Fried dough pastry with cinnamon and sugar.", price: 160, img: "https://b.zmtcdn.com/data/dish_photos/764/885e33c335a11c0f4f727c9454179764.jpg", deal: true },
            { id: "tt09", name: "Jarritos (Mango)", desc: "Refreshing Mexican mango soda.", price: 80, img: "https://b.zmtcdn.com/data/dish_photos/1d1/29d58a5c32e925c0e49520021c2781d1.jpg" },
            { id: "tt10", name: "Fish Tacos (3)", desc: "Three battered fish tacos with slaw and chipotle aioli.", price: 300, img: "https://b.zmtcdn.com/data/dish_photos/016/c0c17537e24d715dec3f114c51474016.jpg" },
        ]
    },
    6: {
        name: "Noodle House",
        categories: ["Thai", "Noodles"],
        items: [
            { id: "nh01", name: "Pad Thai", desc: "Stir-fried rice noodles with shrimp, tofu, and peanuts.", price: 340, img: "https://b.zmtcdn.com/data/dish_photos/0c7/c31521a0614377fe3d2618756d7f00c7.jpg" },
            { id: "nh02", name: "Green Curry", desc: "Spicy coconut curry with chicken and bamboo shoots.", price: 300, img: "https://b.zmtcdn.com/data/dish_photos/d2e/204b6b64b1d62483569ce48e0c90dd2e.jpg" },
            { id: "nh03", name: "Drunken Noodles", desc: "Wide rice noodles with beef, basil, and chili.", price: 320, img: "https://b.zmtcdn.com/data/dish_photos/5f1/a020d53c7c64a5c5332f1145855d05f1.jpg" },
            { id: "nh04", name: "Tom Yum Soup", desc: "Hot and sour soup with shrimp and mushrooms.", price: 180, img: "https://b.zmtcdn.com/data/dish_photos/4c0/9a83d317f2267597b4a8b79b90c374c0.jpg" },
            { id: "nh05", name: "Spring Rolls (4 pcs)", desc: "Crispy fried vegetable spring rolls.", price: 160, img: "https://b.zmtcdn.com/data/dish_photos/f07/f6f059eac4a737f0156a5c1ab5637f07.jpg" },
            { id: "nh06", name: "Chicken Satay (4 pcs)", desc: "Grilled chicken skewers with peanut sauce.", price: 220, img: "https://b.zmtcdn.com/data/dish_photos/f22/0c70477b8f9e160e86b0f19c0b297f22.jpg" },
            { id: "nh07", name: "Pineapple Fried Rice", desc: "Fried rice with chicken, pineapple, and cashews.", price: 280, img: "https://b.zmtcdn.com/data/dish_photos/8be/c13017a6c0b31e9c2c99a8019623e8be.jpg" },
            { id: "nh08", name: "Mango Sticky Rice", desc: "Sweet sticky rice with fresh mango and coconut milk.", price: 200, img: "https://b.zmtcdn.com/data/dish_photos/514/06e23899f1d0defff0c743896c348514.jpg" },
            { id: "nh09", name: "Thai Iced Tea", desc: "Sweet and creamy, strongly-brewed black tea.", price: 100, img: "https://b.zmtcdn.com/data/dish_photos/95b/d2a316a3c631023d50015b63428d095b.jpg" },
            { id: "nh10", name: "Beef & Broccoli", desc: "Stir-fried beef with broccoli in a savory sauce.", price: 330, img: "https://b.zmtcdn.com/data/dish_photos/c1a/51010e6a8e5a6c117b9b0c27f311cc1a.jpg" },
        ]
    },
    7: {
        name: "Cafe Delight",
        categories: ["Cafe", "Coffee", "Cake"],
        items: [
             { id: "cd01", name: "Cappuccino", desc: "Classic espresso drink with steamed milk foam.", price: 150, img: "https://b.zmtcdn.com/data/dish_photos/a18/cafe120b08e427d1b32d184bf4027a18.jpg" },
             { id: "cd02", name: "Chocolate Cake Slice", desc: "Rich and moist chocolate cake.", price: 180, img: "https://b.zmtcdn.com/data/dish_photos/0e2/4a037618f05615781a7051a8d01120e2.jpg", deal: true},
             { id: "cd03", name: "Veg Sandwich", desc: "Simple sandwich with cucumber, tomato, and lettuce.", price: 120, img: "https://b.zmtcdn.com/data/dish_photos/a34/e31f038c92b450c18d35688a29a2ca34.jpg"},
             { id: "cd04", name: "Espresso", desc: "Strong black coffee brewed by forcing steam.", price: 100, img: "https://b.zmtcdn.com/data/dish_photos/044/5e38a2e1c3127a51800f7d54032a1044.jpg"},
             { id: "cd05", name: "Cold Coffee", desc: "Chilled coffee blended with milk and sugar.", price: 160, img: "https://b.zmtcdn.com/data/dish_photos/147/4d2a1b1513e8b4e6d4219a164f9f1147.jpg"},
             { id: "cd06", name: "Blueberry Muffin", desc: "Soft muffin packed with blueberries.", price: 90, img: "https://b.zmtcdn.com/data/dish_photos/9c1/48a8553655b3c4f686940d58853fa9c1.jpg"},
             { id: "cd07", name: "Chicken Croissant", desc: "Flaky croissant filled with creamy chicken.", price: 140, img: "https://b.zmtcdn.com/data/dish_photos/6c7/87771746061a9c336b97607a750b76c7.jpg"},
             { id: "cd08", name: "Iced Tea", desc: "Refreshing lemon iced tea.", price: 110, img: "https://b.zmtcdn.com/data/dish_photos/2c1/66014e41b2383506169d27a4d55002c1.jpg"},
             { id: "cd09", name: "Red Velvet Cake Slice", desc: "Classic red velvet cake with cream cheese frosting.", price: 200, img: "https://b.zmtcdn.com/data/dish_photos/808/88775e2d67a91bb4f64d852a65a25808.jpg"},
             { id: "cd10", name: "Affogato", desc: "Vanilla ice cream drowned in a shot of hot espresso.", price: 170, img: "https://b.zmtcdn.com/data/dish_photos/39e/2513a01ff7a63be8470519114f6b539e.jpg"},
        ]
    },
    8: {
        name: "Dragon Wok",
        categories: ["Chinese", "Noodles"],
        items: [
             { id: "dw01", name: "Veg Hakka Noodles", desc: "Stir-fried noodles with mixed vegetables.", price: 220, img: "https://b.zmtcdn.com/data/dish_photos/5e9/a36518389333a0b1274d0a1b80eee5e9.jpg"},
             { id: "dw02", name: "Chicken Manchurian", desc: "Fried chicken balls in a tangy sauce.", price: 280, img: "https://b.zmtcdn.com/data/dish_photos/07c/419c01f65c9287a952d19f727f42c07c.jpg"},
             { id: "dw03", name: "Veg Fried Rice", desc: "Classic fried rice with assorted vegetables.", price: 200, img: "https://b.zmtcdn.com/data/dish_photos/e53/bbf5f7eda233f02495d4f3b608a0de53.jpg"},
             { id: "dw04", name: "Chilli Paneer Dry", desc: "Cottage cheese tossed with peppers and onions in a spicy sauce.", price: 260, img: "https://b.zmtcdn.com/data/dish_photos/c17/005697a44f051666ff039ea100c67c17.jpg"},
             { id: "dw05", name: "Veg Spring Roll (4 pcs)", desc: "Crispy rolls filled with shredded vegetables.", price: 160, img: "https://b.zmtcdn.com/data/dish_photos/d27/7f08b31a8fc635d79905c1e5448bcd27.jpg"},
             { id: "dw06", name: "Schezwan Chicken Noodles", desc: "Spicy noodles tossed with chicken in Schezwan sauce.", price: 290, img: "https://b.zmtcdn.com/data/dish_photos/7ff/fba8f24419aa36a18d1720875c7b37ff.jpg", deal: true},
             { id: "dw07", name: "Manchow Soup (Veg)", desc: "Spicy and sour soup topped with crispy noodles.", price: 140, img: "https://b.zmtcdn.com/data/dish_photos/c32/b47f48b111a43a75868840742f534c32.jpg"},
             { id: "dw08", name: "Sweet Corn Soup (Chicken)", desc: "Creamy soup with sweet corn and chicken.", price: 160, img: "https://b.zmtcdn.com/data/dish_photos/06f/17ba3f8d228c2e6f47715f0611e4006f.jpg"},
             { id: "dw09", name: "Honey Chilli Potato", desc: "Crispy fried potato strips tossed in a sweet and spicy honey sauce.", price: 210, img: "https://b.zmtcdn.com/data/dish_photos/e58/7c94541ff9589d98e82672580c85ee58.jpg"},
             { id: "dw10", name: "American Chopsuey (Veg)", desc: "Crispy noodles topped with a sweet and sour vegetable gravy.", price: 250, img: "https://b.zmtcdn.com/data/dish_photos/e3b/1a2c07047719f96b9ef282c069c9ae3b.jpg"},
        ]
    },
    9: {
        name: "Southern Spice",
        categories: ["Indian", "South Indian"],
        items: [
             { id: "ssi01", name: "Masala Dosa", desc: "Crispy crepe filled with spiced potato mixture, served with sambar and chutney.", price: 150, img: "https://b.zmtcdn.com/data/dish_photos/7e2/9c8369684949170ffc674259eac117e2.jpg"},
             { id: "ssi02", name: "Idli Sambar (2 pcs)", desc: "Steamed rice cakes served with lentil stew and coconut chutney.", price: 100, img: "https://b.zmtcdn.com/data/dish_photos/485/3e1075fd85a3c65c69707e7b92f75485.jpg", deal: true },
             { id: "ssi03", name: "Plain Dosa", desc: "Simple crispy crepe served with sambar and chutney.", price: 120, img: "https://b.zmtcdn.com/data/dish_photos/5f8/a34a8e63b154a4f8d55a8f5c3f81e5f8.jpg"},
             { id: "ssi04", name: "Vada Sambar (2 pcs)", desc: "Fried lentil doughnuts served with lentil stew and chutney.", price: 110, img: "https://b.zmtcdn.com/data/dish_photos/018/b509f6b9075ce624c4146a48d88e7018.jpg"},
             { id: "ssi05", name: "Uttapam (Onion)", desc: "Thick pancake made from rice batter topped with onions.", price: 140, img: "https://b.zmtcdn.com/data/dish_photos/a0d/4014f494f1c1f4e0c1f5108dbe559a0d.jpg"},
             { id: "ssi06", name: "Rava Masala Dosa", desc: "Semolina crepe filled with spiced potato mixture.", price: 170, img: "https://b.zmtcdn.com/data/dish_photos/081/1517430c5e62f592c3a504a742017081.jpg"},
             { id: "ssi07", name: "Pongal", desc: "Savory rice and lentil dish tempered with spices.", price: 130, img: "https://b.zmtcdn.com/data/dish_photos/148/7e95b02660a9f5d176722abeb8e08148.jpg"},
             { id: "ssi08", name: "Filter Coffee", desc: "Traditional South Indian filter coffee.", price: 60, img: "https://b.zmtcdn.com/data/dish_photos/b61/e6079c6d4825dd5187e14c330df3bb61.jpg"},
             { id: "ssi09", name: "Poori Bhaji", desc: "Deep-fried bread served with potato curry.", price: 160, img: "https://b.zmtcdn.com/data/dish_photos/e95/8dfd76b1f28fd49b08f4cb7e33527e95.jpg"},
             { id: "ssi10", name: "South Indian Thali", desc: "Complete meal with rice, sambar, rasam, curries, papad, and dessert.", price: 380, img: "https://b.zmtcdn.com/data/dish_photos/98e/08d13b4ea83f06dd65d08ff0a9fcc98e.jpg" }, // Reusing image
        ]
    },
    10: {
        name: "Healthy Bites",
        categories: ["Healthy", "Salad"],
        items: [
             { id: "hb01", name: "Greek Salad", desc: "Fresh salad with feta cheese, olives, cucumber, and tomatoes.", price: 250, img: "https://b.zmtcdn.com/data/dish_photos/e06/8a3493e82b75a40a8501aca19277de06.jpg"},
             { id: "hb02", name: "Quinoa Bowl", desc: "Healthy bowl with quinoa, roasted vegetables, and a light dressing.", price: 300, img: "https://b.zmtcdn.com/data/dish_photos/706/95955a828945a9de1c96417d77a0c706.jpg"},
             { id: "hb03", name: "Fruit Salad", desc: "A mix of seasonal fresh fruits.", price: 180, img: "https://b.zmtcdn.com/data/dish_photos/b6f/478170d1487610026e6d5e2a6d71ab6f.jpg"},
             { id: "hb04", name: "Chicken Caesar Salad", desc: "Classic Caesar salad with grilled chicken breast.", price: 280, img: "https://b.zmtcdn.com/data/dish_photos/a0b/65b3823d726b2166e01a31681c6a2a0b.jpg"}, // Reusing image
             { id: "hb05", name: "Sprout Salad", desc: "Nutritious salad made with mixed sprouts, onions, and tomatoes.", price: 150, img: "https://b.zmtcdn.com/data/dish_photos/81b/af97c36d07e2c98a5e54d65014ec481b.jpg"},
             { id: "hb06", name: "Avocado Toast", desc: "Whole wheat toast topped with mashed avocado and seasoning.", price: 220, img: "https://b.zmtcdn.com/data/dish_photos/01d/d29996b79c3f46fef95b306b98ea501d.jpg"},
             { id: "hb07", name: "Smoothie (Mixed Berry)", desc: "Refreshing smoothie blended with mixed berries and yogurt.", price: 190, img: "https://b.zmtcdn.com/data/dish_photos/046/c8a14b3581aca79774647307223e7046.jpg"},
             { id: "hb08", name: "Grilled Fish with Veggies", desc: "Grilled fish fillet served with steamed or sautéed vegetables.", price: 350, img: "https://b.zmtcdn.com/data/dish_photos/c10/b190f890f585d8a0c24209c13ee35c10.jpg"},
             { id: "hb09", name: "Oatmeal Bowl", desc: "Warm bowl of oatmeal topped with fruits and nuts.", price: 160, img: "https://b.zmtcdn.com/data/dish_photos/b1e/3d17c7625cb278917e727e4e16d47b1e.jpg"},
             { id: "hb10", name: "Green Juice", desc: "Healthy juice blend of spinach, cucumber, apple, and ginger.", price: 170, img: "https://b.zmtcdn.com/data/dish_photos/b19/8fcb784a515f42c30b20005a30360b19.jpg"},
        ]
    },
    11: {
        name: "Roll Station",
        categories: ["Rolls", "Fast Food"],
        items: [
             { id: "rs01", name: "Paneer Tikka Roll", desc: "Grilled cottage cheese wrapped in a paratha with sauces and onions.", price: 180, img: "https://b.zmtcdn.com/data/dish_photos/4c6/d47e5b3c3b01c3e3a479b18360d8a4c6.jpg"},
             { id: "rs02", name: "Chicken Seekh Roll", desc: "Minced chicken seekh kebab wrapped in a soft roti.", price: 220, img: "https://b.zmtcdn.com/data/dish_photos/011/9d347c474d7efb4792ec0f0c0ae2f011.jpg", deal: true},
             { id: "rs03", name: "Egg Roll", desc: "Classic Kolkata style egg roll.", price: 120, img: "https://b.zmtcdn.com/data/dish_photos/00f/4ecdf2260f898a09f8369ed73679d00f.jpg"},
             { id: "rs04", name: "Veg Roll", desc: "Mixed vegetable filling wrapped in a paratha.", price: 150, img: "https://b.zmtcdn.com/data/dish_photos/479/3a8c56c2d1b06c278b273415c4d3d479.jpg"},
             { id: "rs05", name: "Chicken Tikka Roll", desc: "Succulent chicken tikka pieces in a wrap.", price: 200, img: "https://b.zmtcdn.com/data/dish_photos/375/47c617e9150033d596641e57c6158375.jpg"},
             { id: "rs06", name: "Mutton Seekh Roll", desc: "Spicy mutton seekh kebab in a wrap.", price: 250, img: "https://b.zmtcdn.com/data/dish_photos/19a/ba965a397793d4899c759546059d319a.jpg"},
             { id: "rs07", name: "Aloo Roll", desc: "Spiced potato filling wrapped in a paratha.", price: 100, img: "https://b.zmtcdn.com/data/dish_photos/5f1/347b7495c62d1c678a10d9f2c61145f1.jpg"},
             { id: "rs08", name: "Double Egg Chicken Roll", desc: "Egg roll with added chicken filling.", price: 190, img: "https://b.zmtcdn.com/data/dish_photos/f2c/150c0c6c19ac7047f525531d05370f2c.jpg"},
             { id: "rs09", name: "Fish Tikka Roll", desc: "Grilled fish tikka pieces in a wrap.", price: 230, img: "https://b.zmtcdn.com/data/dish_photos/cb3/a64a3952f10b7b14022a16d56637fcb3.jpg"},
             { id: "rs10", name: "Mushroom Roll", desc: "Sautéed mushroom filling in a paratha.", price: 170, img: "https://b.zmtcdn.com/data/dish_photos/135/203d9d300b957e8417c80d8504f7b135.jpg"},
        ]
    },
};