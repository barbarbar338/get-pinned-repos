[![stars](https://img.shields.io/github/stars/barbarbar338/get-pinned-repos?color=yellow&logo=github&style=for-the-badge)](https://github.com/barbarbar338/get-pinned-repos)
[![license](https://img.shields.io/github/license/barbarbar338/get-pinned-repos?logo=github&style=for-the-badge)](https://github.com/barbarbar338/get-pinned-repos)
[![supportServer](https://img.shields.io/discord/711995199945179187?color=7289DA&label=Support&logo=discord&style=for-the-badge)](https://discord.gg/BjEJFwh)
[![forks](https://img.shields.io/github/forks/barbarbar338/get-pinned-repos?color=green&logo=github&style=for-the-badge)](https://github.com/barbarbar338/get-pinned-repos)
[![issues](https://img.shields.io/github/issues/barbarbar338/get-pinned-repos?color=red&logo=github&style=for-the-badge)](https://github.com/barbarbar338/get-pinned-repos)

<p align="center">
  <img src="https://raw.githubusercontent.com/barbarbar338/readme-template/main/icon.png" alt="Logo" width="160" height="160" />
  <h3 align="center">Get Pinned Repos</h3>

  <p align="center">
    Get anyones pinned GitHub repositories easily.
    <br />
    <a href="https://discord.gg/BjEJFwh"><strong>Get support »</strong></a>
    <br />
    <br />
    <a href="https://github.com/barbarbar338/get-pinned-repos/issues">Report Bug</a>
    ·
    <a href="https://github.com/barbarbar338/get-pinned-repos/issues">Request Feature</a>
    ·
    <a href="https://barbarbar338.fly.dev">Webpage</a>
  </p>
</p>

# ✨ Get Pinned Repos

Get anyones pinned GitHub repositories easily.

# 📦 Installation

-   Using yarn: `yarn add get-pinned-repos`
-   Using npm: `npm i get-pinned-repos`

# 🤓 Usage

```js
import { Client } from "get-pinned-repos";
// or
const { Client } = require("get-pinned-repos");

Client.setToken("YOUR GITHUB TOKEN (MAKE SURE IT HAS ADMIN PRIVILIGES)");
const pinned = await Client.getPinnedRepos("barbarbar338");

console.log(pinned); // IPinnedRepo[]
```

See https://github.com/barbarbar338/get-pinned-repos/blob/main/src/types.ts for more detailed typings.

# 📄 License

Copyright © 2021 [Barış DEMİRCİ](https://github.com/barbarbar338).

Distributed under the [MIT](https://mit-license.org/) License. See `LICENSE` for more information.

# 🧦 Contributing

Fell free to use GitHub's features.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/my-feature`)
3. Run prettier and eslint (`npm run format && npm run lint`)
4. Commit your Changes (`git commit -m 'my awesome feature my-feature'`)
5. Push to the Branch (`git push origin feature/my-feature`)
6. Open a Pull Request

# 🔥 Show your support

Give a ⭐️ if this project helped you!

# 📞 Contact

-   Mail: demirci.baris38@gmail.com
-   Discord: https://discord.gg/BjEJFwh
-   Instagram: https://www.instagram.com/ben_baris.d/
