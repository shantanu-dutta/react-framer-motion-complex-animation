export const cardVariants = {
  inactive: {
    height: "300px",
    width: "500px",
    transition: {
      duration: 0.5,
      delay: 0.4
    }
  },
  active: {
    height: "90vh",
    width: "100%",
    transition: {
      duration: 0.5,
      delay: 0.6
    }
  }
};

export const cardContentVariants = {
  inactive: {
    transition: {
      staggerChildren: 0.3,
      duration: 0.4,
      delay: 0.4
    }
  },
  active: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
      duration: 0.4,
      staggerDirection: -1,
      delay: 0.4
    }
  }
};

export const thumbnailVariants = {
  inactive: {
    x: -45,
    y: 35,
    opacity: 0,
    transition: {
      duration: 0.4
    }
  },
  active: {
    x: -45,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};

export const contentVariants = {
  inactive: {
    x: -35,
    y: 35,
    opacity: 0,
    transition: {
      duration: 0.4
    }
  },
  active: {
    x: -35,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};

export const expandedVariants = {
  inactive: {
    opacity: 0
  },
  active: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3
    }
  }
};

export const mainImageVariants = {
  inactive: {
    opacity: 0,
    y: -50,
    x: -65,
    transition: {
      duration: 0.8
    }
  },
  active: {
    opacity: 1,
    y: -50,
    x: -35,
    transition: {
      duration: 0.8
    }
  },
  exit: {
    opacity: 0,
    x: -35,
    transition: {
      duration: 0.4
    }
  }
};

export const contentBlockVariants = {
  inactive: {
    opacity: 0,
    y: 20
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};
