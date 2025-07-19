import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Badge from '@mui/material/Badge';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const pages = ['Home', 'Menu', 'About', 'Contact'];

const products = ['Product 1', 'Product 2', 'Product 3'];
const services = ['Service 1', 'Service 2'];

const Header = ({ darkMode, toggleDarkMode }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorProducts, setAnchorProducts] = React.useState(null);
  const [anchorServices, setAnchorServices] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenProducts = (event) => {
    setAnchorProducts(event.currentTarget);
  };

  const handleCloseProducts = () => {
    setAnchorProducts(null);
  };

  const handleOpenServices = (event) => {
    setAnchorServices(event.currentTarget);
  };

  const handleCloseServices = () => {
    setAnchorServices(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Mobile Menu */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { md: 'none' } }}
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          FoodiesHub 🍽️
        </Typography>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
          {pages.map((page) => (
            <Button key={page} sx={{ color: 'white', mx: 1 }}>
              {page}
            </Button>
          ))}

          {/* Products Menu */}
          <Button
            sx={{ color: 'white', mx: 1 }}
            onClick={handleOpenProducts}
            endIcon={<ArrowDropDownIcon />}
          >
            Products
          </Button>
          <Menu
            anchorEl={anchorProducts}
            open={Boolean(anchorProducts)}
            onClose={handleCloseProducts}
          >
            {products.map((product) => (
              <MenuItem key={product} onClick={handleCloseProducts}>
                {product}
              </MenuItem>
            ))}
          </Menu>

          {/* Services Menu */}
          <Button
            sx={{ color: 'white', mx: 1 }}
            onClick={handleOpenServices}
            endIcon={<ArrowDropDownIcon />}
          >
            Services
          </Button>
          <Menu
            anchorEl={anchorServices}
            open={Boolean(anchorServices)}
            onClose={handleCloseServices}
          >
            {services.map((service) => (
              <MenuItem key={service} onClick={handleCloseServices}>
                {service}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Icons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={3} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <AccountCircleIcon />
          </IconButton>
          <IconButton
            sx={{ ml: 1 }}
            onClick={toggleDarkMode}
            color="inherit"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>

        {/* Mobile Menu Drawer */}
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{ display: { md: 'none' } }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              {page}
            </MenuItem>
          ))}
          <MenuItem onClick={handleCloseProducts}>Products</MenuItem>
          <MenuItem onClick={handleCloseServices}>Services</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
