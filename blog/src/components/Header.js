import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <Fragment>
            <Link to="/">
                <h1>냉동생선의 블로그</h1>
            </Link>

        </Fragment>
    );
}

export default Header;