import React from 'react';
import { SearchBox } from './SearchBox';
import { Sidebar } from './Sidebar';

export const InboxPeoble = () => {
    return (
        <div className="inbox_people">
            <SearchBox/>
            <Sidebar/>
        </div>
    )
}
