import React from 'react'
import Popup from '../../CustomComponents/Popup';

export default function KitchenMade(){

    const features = [
        {
          id: 1,
          title: "QUALITY & SUSTAINABILITY",
          description: "Certified for excellence by the German Quality Assurance Association, our kitchens proudly display the Golden M emblem, symbolising our commitment to top-notch quality and human health compatibility. Our kitchen designs embody safety and promote a healthy lifestyle.Moreover, our enterprise has earned the PEFC certification, marking us as part of the largest forest certification network globally. PEFC's rigorous standards are designed to revolutionize forest management worldwide, ensuring forests continue to deliver their full range of environmental, social, and economic advantages for everyone.",
          image: 'Images/Quality.jpg'
        },
        {
          id: 2,
          title: "CARCASE",
          description: "Featuring a robust build, our kitchen units come with carcases, shelves, and sides that are 19 mm thick, complemented by an 8 mm thick back wall that's grooved around its entirety for unmatched stability and user convenience. Our construction not only surpasses industry norms but also guarantees long-lasting durability, ensuring our customers enjoy their kitchens for many years to come.",
          image: "Images/Carcase.png"
        },
        {
          id: 3,
          title: "LIFT FITTINGS",
          description: "Elevate your kitchen experience with our cutting-edge lift fittings. These advanced mechanisms transform access to your overhead cabinets, offering a seamless, effortless way to reach your items. With a simple gesture, doors glide upwards, providing unobstructed access to your belongings without the hassle of traditional swinging doors. Our lift fittings are designed with ergonomics and space optimization in mind, ensuring that every inch of your kitchen is utilized efficiently. Incorporating the latest in soft-close technology, these fittings promise a smooth, quiet operation, enhancing the calm and comfort of your cooking space. Perfect for modern kitchens, our lift fittings blend functionality with a sleek, contemporary aesthetic, making every interaction a delight.",
          image: "Images/Liftfittings.png"
        },
        {
          id: 4,
          title: "PULL OUT SYSTEM",
          description: "Our innovative pull-out systems redefine kitchen convenience, providing effortless access to your essentials. Designed with precision, these systems allow for smooth, easy movement, making every pull and push a satisfying experience. Whether you're reaching for pots, pans, or pantry items, our pull-out mechanisms ensure everything is at your fingertips, eliminating the need for unnecessary stretching or bending. Crafted to maximize storage space while maintaining sleek aesthetics, these systems integrate seamlessly into any kitchen design, offering both functionality and style. Experience the ease of modern living with our state-of-the-art pull-out systems, designed for those who cherish efficiency and elegance in their kitchen space.",
          image: "Images/PullOut.png"
        },
        {
          id: 5,
          title: "INNER PULL OUT",
          description: "Our inner pull-out units are the pinnacle of efficient kitchen design, offering a seamless solution to storage and accessibility. Engineered to enhance the functionality of your kitchen, these pull-outs allow you to easily store and retrieve items, making optimal use of every inch of cabinet space. With a focus on convenience and order, our inner pull-outs are designed to fit neatly into your existing cabinetry, reducing clutter and promoting a tidy cooking environment. Their smooth operation and sturdy construction ensure a user-friendly experience, transforming your kitchen into a model of efficiency and elegance",
          image: "Images/InnerPullOut.png"
        },
        {
          id: 6,
          title: "POWDER COATING",
          description: "Powder coating redefines the finish of our kitchen fronts, offering an unmatched blend of durability and aesthetic appeal. This cutting-edge process outshines traditional finishes by being exceptionally resistant to scratches, impacts, and wear. Its eco-friendly nature is a testament to our commitment to sustainability, eliminating the need for harmful solvents. Beyond its robustness, powder coating ensures ease of maintenance, standing up brilliantly to dirt and spills. The result is a sleek, high-quality look that remains pristine over time, making your kitchen not just a space for cooking, but a statement of style and environmental responsibility.",
          image: "Images/PowerCoating.png"
        },
        {
          id: 7,
          title: "BLUM TECHNOLOGY",
          description: "Our entire range comes standard with the BLUM LEGRABOX pure pull-out system, enhancing functionality and elegance. Equipped with Blum hinges and lift mechanisms, each features the integrated BLUMOTION soft-close system, ensuring a seamless and quiet operation. For those desiring even more convenience, we offer the option of an electric SERVO-DRIVE or the TIP-ON mechanical opening system upon request. These features embody simplicity, appeal, and modernity, allowing for effortless opening and closing with just a touch. Crafted for enjoyment, our kitchens are designed to enhance your everyday living.",
          image: "Images/BlumTechnology.png",
        },
        {
          id: 8,
          title: "LASER EDGES",
          description: "Our fronts, bodies, and shelves are crafted with precision laser-edged technology. This advanced approach to edge finishing ensures a seamlessly smooth surface, effectively eliminating any visible seams between panels and edges. This technique not only enhances the durability of our components but also achieves a flawless, uniform appearance, as if each piece were carved from a single block.",
          image: "Images/LaserTechnology.png"
        },
        {
          id: 9,
          title: "POWDER COATING",
          description:'Discover our expansive palette for powder-coated front panels, where quality meets variety. Powder coating stands out from traditional lacquer finishes by being notably more scratch-resistant, durable, and impact-proof. This eco-friendly choice avoids the use of organic solvents, aligning with our commitment to sustainability. Moreover, its low maintenance, owing to a remarkable resistance to dirt, makes cleaning a breeze. Each piece not only promises longevity but also enchants with its superior aesthetics and tactile experience.',
          image:  "Images/PowderCoating.png",
        }
      ];

      const featureSection = features.map(feature => (
        <Popup key={feature.id} title={feature.title} image={feature.image} description={feature.description} />
    ));

    
    
    return(
        <section className='my-10 mx-auto py-4 px-4 md:px-12 lg:px-24 max-w-screen-2xl'>
        <div className='text-center lg:w-3/4 m-auto space-y-4 mb-10'>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">How your kitchen is made</h2>
            <p className="text-md md:text-lg text-gray-600">We utilise high-grade materials coupled with the foremost technology sourced from top brand manufacturers. This is achieved through marrying traditional handcrafted expertise with contemporary production techniques.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {featureSection}
        </div>
    </section>
    )

}