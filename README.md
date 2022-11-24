This website was built as a sample project to test and acquire more experience using Gatsby JS. I used boiler plating for the CSS to allow me to have a greater focus on utilizing Gatsby JS and spend less time on styling. This website incorporates a blog portion which I hope to fill with some interesting postings.


![Capture](https://user-images.githubusercontent.com/51753527/203808945-f311f5f4-507f-47b7-ad9d-ee99a582e61a.PNG)

## Setup Notes

1. All components ready to go (including imports)
2. Use main.css - less imports
3. Limit amount of components - better overview
4. React Icons

[react icons] https://react-icons.github.io/react-icons/

```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```

5. Use constants to avoid repetition.

6. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```
