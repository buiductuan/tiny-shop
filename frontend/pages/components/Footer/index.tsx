import type { NextPage } from "next";
import { version } from 'antd';

const Footer: NextPage = () => {
    return (
        <footer>
            <small>Project build on base Antd version: {version}</small>
        </footer>
    )
}

export default Footer;