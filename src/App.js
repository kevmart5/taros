import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import CarRegister from './Pages/CarRegister';
import CarInformation from './Pages/CarInformation';
import FluidChanges from './Pages/FluidChages';
import CarFixes from './Pages/CarFixes';
import CarDeleteInformation from './Pages/DeleteCar';
import CarReport from './Pages/CarReports';
import { EditCar, CarEditInformation } from './Pages';

// Components Material UI
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import './App.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		paddingTop: 50,
	},
}));

function App(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const menuItems = [
		{ name: 'Inicio', route: '' },
		{ name: 'Registrar vehículo', route: 'car-register' },
		{ name: 'Editar vehículo', route: 'car-edit' },
		{ name: 'Crear reporte', route: 'car-report' },
		{ name: 'Eliminar vehículos', route: 'car-delete' },
	];

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<CssBaseline />
			<AppBar position='fixed' className={classes.appBar}>
				<Toolbar>
					<IconButton
						color='inherit'
						aria-label='open drawer'
						edge='start'
						className={classes.menuButton}
					></IconButton>
					<Typography variant='h6' noWrap>
						Taro's Garage
					</Typography>
				</Toolbar>
			</AppBar>
			<List>
				{menuItems.map((element, index) => (
					<Link to={`/${element.route}`} className='sidebar-link' key={index}>
						<ListItem button key={element.route}>
							<ListItemText primary={element.name} />
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
		</div>
	);
	return (
		<>
			<Router>
				<div className={classes.root}>
					<nav className={classes.drawer} aria-label='mailbox folders'>
						{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
						<Hidden smUp implementation='css'>
							<Drawer
								container={container}
								variant='temporary'
								anchor={theme.direction === 'rtl' ? 'right' : 'left'}
								open={mobileOpen}
								onClose={handleDrawerToggle}
								classes={{
									paper: classes.drawerPaper,
								}}
								ModalProps={{
									keepMounted: true, // Better open performance on mobile.
								}}
							>
								{drawer}
							</Drawer>
						</Hidden>
						<Hidden xsDown implementation='css'>
							<Drawer
								classes={{
									paper: classes.drawerPaper,
								}}
								variant='permanent'
								open
							>
								{drawer}
							</Drawer>
						</Hidden>
					</nav>
					<main className={classes.content}>
						<div className={classes.toolbar} />
						<Grid container item lg={12} spacing={3}>
							<Switch>
								<Route exact path='/'>
									<Home />
								</Route>
								<Route exact path='/car-register'>
									<CarRegister />
								</Route>
								<Route exact path='/car-information/:id'>
									<CarInformation />
								</Route>
								<Route exact path='/fluid-changes'>
									<FluidChanges />
								</Route>
								<Route exact path='/car-fixes'>
									<CarFixes />
								</Route>
								<Route exact path='/car-edit'>
									<EditCar />
								</Route>
								<Route exact path='/car-edit-information'>
									<CarEditInformation />
								</Route>
								<Route exact path='/car-delete'>
									<CarDeleteInformation />
								</Route>
								<Route exact path='/car-report/:id'>
									<CarReport />
								</Route>
							</Switch>
						</Grid>
					</main>
				</div>
			</Router>
		</>
	);
}

export default App;
