// material
import { Box, Container, Link, Typography } from '@mui/material';
// next
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
// import { Link as ScrollLink } from 'react-scroll';
// // components
// import Logo from '../../components/Logo';
// //
// import MainFooter from './MainFooter';
// import MainNavbar from './MainNavbar';

// ----------------------------------------------------------------------

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <>
      {/* <MainNavbar /> */}
      <div>{children}</div>

      {/* {!isHome ? (
        <MainFooter />
      ) : (
        <Box
          sx={{
            py: 5,
            textAlign: 'center',
            position: 'relative',
            bgcolor: 'background.default'
          }}
        >
          <Container maxWidth="lg">
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mb: 1, mx: 'auto', cursor: 'pointer' }} />
            </ScrollLink>

            <Typography variant="caption" component="p">
              © All rights reserved
              <br /> made by &nbsp;
              <Link>Everfence</Link>
            </Typography>
          </Container>
        </Box>
      )} */}
    </>
  );
}
