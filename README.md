# strapi-plugin-toolkit

Content-type generator and utilities for better Developer Experience.
It generates content types and content objects to make CRUD simple with IntelliSense.
Using typescript projects will give type inference and required filed errors while creating new content.


⚠️ Before We Get Started
### This is a Development version and not stable.

## Installation

Please install the following packages in the strapi application

```bash
npm i strapi-plugin-toolkit recursive-copy @kmariappan/strapi-type-generator copyfiles typescript

 or

yarn add strapi-plugin-toolkit recursive-copy @kmariappan/strapi-type-generator copyfiles typescript
```

# Step 1
After installation, create a config file as toolkit.config.js in the app Root directory with the following code.

```js
const fs = require("fs");
const { generateTypes } = require("@kmariappan/strapi-type-generator");
const copy = require("recursive-copy");

const tempDir = "./.tmp/type-generator-template";

const prepareTemplatefiles = () => {
  copy(
    "./node_modules/@kmariappan/strapi-type-generator/templates/server",
    tempDir,
    (error, results) => {
      if (error) {
        console.error("Copy failed: " + error);
      } else {
        console.info("Copied " + results.length + " files");
      }
    }
  );
};

prepareTemplatefiles();

generateTypes({
  generateEntityClass: true,
  path: `${tempDir}/lib`,
}).then((res) => {
  if (res) {
    setTimeout(() => {
      process.exit();
    }, 1500);
  }
});
```

# Step 2

Add the following code in to package.json scripts.

```js
    "pregenerate": "cd .tmp/ && rm -rf type-generator-template",
    "generate": "node toolkit.config.js && cd .tmp/type-generator-template && tsc",
    "postgenerate": "cd .tmp/ && rm -rf type-generator-template"
```

# Step 3

Run the following command 

```js
npm run generate of yarn generate
```


## Usage

We can import the contents in the admin frontend. Below sample shows the plugin homepage component. 
[Example Project](https://github.com/kmariappan/strapi-plugin-toolkit-example)

```js
import React, { memo, useEffect, useState } from "react";
import { contents } from "strapi-plugin-toolkit";

const HomePage = () => {
  const [items, setItems] = useState(null);

  useEffect(() => {
    contents.category
      .select()
      .get()
      .then((res) => {
        setItems(res.data);
      });
  }, []);

  if (items === null) {
    return <p style={{ margin: "3rem" }}>Plugin Homepage</p>;
  }

  return (
    <div style={{ margin: "3rem" }}>
      {items &&
        items.map((item) => (
          <p style={{ marginTop: "1rem" }} key={item.id}>
            {item?.title || item?.name}
          </p>
        ))}
    </div>
  );
};

export default memo(HomePage);
```

### Note
Please look at [strapi-client-js](https://github.com/kmariappan/strapi-client-js) documentation for more filter and populate options until the release of this plugin.

# Todo

- Custom target folder for generated files.
- A custom selection of the contents to generate types or disable. 
- Integration between this plugin to [strapi-client-js](https://github.com/kmariappan/strapi-client-js) for generating types on the client-side.
## Server
- Provide Entity service to another plugin
- Query Engine API

## Admin
- React Query hooks

## CLI
- Plugin installation and the intialization automation.
- Generate types from CLI with Custom Config



### Please feel free to give ideas ;-)

### Credits
This typescript repository structure of this plugin is inspired by [strapi-plugin-comments](https://github.com/VirtusLab-Open-Source/strapi-plugin-comments)](https://github.com/VirtusLab-Open-Source/strapi-plugin-comments).