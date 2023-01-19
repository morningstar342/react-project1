import React from 'react';

const MainContent = ({pageName, designer}) => {
    return (
        <main>
            {pageName} Page
            <br/>
            Designed by {designer}
        </main>
    );
}

export default MainContent;
