"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";



const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

// Context so nested items can re-assert the active menu item
export const MenuContext = React.createContext({ setActive: () => { }, currentItem: null });

// Context to coordinate hover state across Menu and submenus
export const MenuHoverContext = React.createContext({ registerHover: () => { }, unregisterHover: () => { } });

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  const hoverCtx = React.useContext(MenuHoverContext);
  return (
    <div className="relative">
      <motion.p
        onMouseEnter={() => setActive(item)}
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white">
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}>
          {active === item && (
            <div
              onMouseEnter={() => hoverCtx && hoverCtx.registerHover && hoverCtx.registerHover()}
              onMouseLeave={() => hoverCtx && hoverCtx.unregisterHover && hoverCtx.unregisterHover()}
              className="absolute top-[calc(100%+1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                // layoutId ensures smooth animation
                layoutId="active"
                className="relative bg-white dark:bg-black backdrop-blur-sm rounded-2xl border border-black/20 dark:border-white/20 shadow-xl p-1.5 px-2.5">
                {/* <div className="absolute top-1/2 -translate-y-1/2 h-[95%] w-px bg-gray-200 left-[6.8%]" /> */}
                <motion.div
                  // layout ensures smooth animation
                  layout
                  className="w-max h-full">
                  <MenuContext.Provider value={{ setActive, currentItem: item }}>
                    {children}
                  </MenuContext.Provider>
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  // Use a hover counter so any submenu can keep the menu open
  const hoverCount = useRef(0);
  const leaveTimeout = useRef(null);

  useEffect(() => {
    return () => {
      if (leaveTimeout.current) clearTimeout(leaveTimeout.current);
    };
  }, []);

  const registerHover = () => {
    hoverCount.current += 1;
    if (leaveTimeout.current) {
      clearTimeout(leaveTimeout.current);
      leaveTimeout.current = null;
    }
  };

  const unregisterHover = () => {
    hoverCount.current = Math.max(0, hoverCount.current - 1);
    if (hoverCount.current === 0) {
      leaveTimeout.current = setTimeout(() => setActive(null), 150);
    }
  };

  const handleMouseEnter = () => {
    registerHover();
  };

  const handleMouseLeave = () => {
    // start unregistering one hover for leaving the main menu
    unregisterHover();
  };

  return (
    <MenuHoverContext.Provider value={{ registerHover, unregisterHover }}>
      <article
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative rounded-full border border-transparent dark:bg-black dark:border-white/20 bg-white shadow-input flex justify-center gap-6 py-6">
        {children}
      </article>
    </MenuHoverContext.Provider>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl" />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-40 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Link
      {...rest}
      className={cn("text-neutral-700 dark:text-neutral-200 hover:text-black px-4 py-2.5 rounded-2xl", className)}>
      {children}
    </Link>
  );
};

// New component for nested menu items
export const NestedHoveredLink = ({
  children,
  className,
  submenu,
  ...rest
}) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const menuCtx = React.useContext(MenuContext);
  const { setActive: setMenuActive, currentItem } = menuCtx || {};
  const hoverCtx = React.useContext(MenuHoverContext);
  const { registerHover, unregisterHover } = hoverCtx || {};

  // Menü ve submenu üzerinde hover varken kapanmaması için, hem ana div hem submenu motion.div'da aynı mouse enter/leave fonksiyonları kullanılmalı
  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (registerHover) registerHover();
        setShowSubmenu(true);
        if (setMenuActive && currentItem) setMenuActive(currentItem);
      }}
      onMouseLeave={() => {
        if (unregisterHover) unregisterHover();
        setShowSubmenu(false);
      }}
    >
      <Link
        {...rest}
        onMouseEnter={() => {
          if (registerHover) registerHover();
          setShowSubmenu(true);
        }}
        onMouseLeave={() => {
          if (unregisterHover) unregisterHover();
          setShowSubmenu(false);
        }}
        className="text-neutral-700 dark:text-neutral-200 hover:text-black flex items-center justify-between gap-2 group py-2.5 px-4 hovered-link">
        {children}
        {submenu && (
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </Link>

      {submenu && showSubmenu && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-full top-0 -ml-2 bg-white dark:bg-black backdrop-blur-sm rounded-xl overflow-hidden border border-black/20 dark:border-white/20 shadow-xl min-w-48 z-50 py-0.5 pb-3"
          data-submenu="true"
          onMouseEnter={() => {
            if (registerHover) registerHover();
            setShowSubmenu(true);
          }}
          onMouseLeave={() => {
            if (unregisterHover) unregisterHover();
            setShowSubmenu(false);
          }}
        >
          <div className="flex flex-col">
            {submenu}
          </div>
        </motion.div>
      )}
    </div>
  );
};
