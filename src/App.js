import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './Components/Header';
import CarRegister from './Pages/CarRegister';
import CarInformation from './Pages/CarInformation';
import FluidChanges from './Pages/FluidChages';
import CarFixes from './Pages/CarFixes';
import HomePage from './Pages/HomePage';
import Sidebar from './Components/Sidebar';

// Components Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

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
	},
}));

function App(props) {
	const { container } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};
	const drawer = (
		<div>
			<div className={classes.toolbar} />
			<Divider />
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem button key={text}>
						{/* <ListItemIcon></ListItemIcon> */}
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem button key={text}>
						{/* <ListItemIcon></ListItemIcon> */}
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</div>
	);
	return (
		<>
			<div className={classes.root}>
				<CssBaseline />
				<AppBar position='fixed' className={classes.appBar}>
					<Toolbar>
						<IconButton
							color='inherit'
							aria-label='open drawer'
							edge='start'
							onClick={handleDrawerToggle}
							className={classes.menuButton}
						></IconButton>
						<Typography variant='h6' noWrap>
							Responsive drawer
						</Typography>
					</Toolbar>
				</AppBar>
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
						<Router>
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
								<Route exact path='/home-page'>
									<HomePage />
								</Route>
							</Switch>
						</Router>
					</Grid>
				</main>
			</div>
		</>
	);
}

export default App;
