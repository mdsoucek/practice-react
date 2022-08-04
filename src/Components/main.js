import React from 'react';
import Table from './table';
import FlexImages from './flex-images';

function Main() {
    return(
        <main>
            <h1>My Beautiful Photo Gallery</h1>
            <FlexImages />
            <h2>Header right here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Table />
        </main>
    )
}

export default Main;