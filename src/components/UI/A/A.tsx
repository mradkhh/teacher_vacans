import React, {FC, memo} from 'react';
import {Link} from "react-router-dom";

interface AProps {
    href: string,
    text: string
}

const A: FC<AProps> = memo(({ href, text }) => {
    return (
        <Link to={href}>{text}</Link>
    );
});

export default A;