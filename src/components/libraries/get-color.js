const GetColor = (iconName) => {
  switch (iconName) {
    case "Instagram":
      return "#8a3ab9";
    case "Facebook":
      return "#3b5998";
    case "Linkedin":
      return "#0A66C2";
    case "Github":
        return "#171515";
    case "Twitter":
        return "#1DA1F2";
  }
};

export default GetColor;
