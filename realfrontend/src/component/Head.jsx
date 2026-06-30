export default function Head() {
  return (
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        { src="https://cdn.tailwindcss.com" }

        <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet"/>

        {
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            "saone-green": '#2B5148',
                            "saone-terracotta": '#A53F32',
                            "saone-cream": '#F9F6EF',
                        },
                        fontFamily: {
                            caveat: ['Caveat Brush', 'cursive'],
                            montserrat: ['Montserrat', 'sans-serif']
                        },
                    }
                }
            }
        }
    </head>
    );
}