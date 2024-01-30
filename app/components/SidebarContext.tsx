import React, { createContext, useState, ReactNode } from "react";

// Initial context value
const initialValue = {
    isCollapsedSidebar: false,
    toggleSidebarCollapseHandler: () => {}
};

// Create a context
export const SidebarContext = createContext(initialValue);

interface Props {
    children: ReactNode | ReactNode[];
}

// SidebarProvider component
const SidebarProvider = ({ children }: Props) => {

    // State for controlling the sidebar collapse
    const [isCollapsedSidebar, toggleSidebarCollapse] = useState<boolean>(false);

    // Handler for toggling sidebar collapse
    const toggleSidebarCollapseHandler = () => {
        toggleSidebarCollapse(prev => !prev);
    }

    return (
        // Provide the context value to the children components
        <SidebarContext.Provider
            value={{ isCollapsedSidebar, toggleSidebarCollapseHandler }}
        >
            {children}
        </SidebarContext.Provider>
    );
};

export default SidebarProvider;