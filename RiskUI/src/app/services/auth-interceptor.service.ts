import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next:HttpHandlerFn) => {
  
  const token = localStorage.getItem('token');

  if (token) {
    
    console.log('Token found:', token); // Debugging line to check if the token is retrieved correctly
    const clonedReq = req.clone({
      setHeaders: { 
        Authorization: `Bearer ${token}`}
    });
    return next(clonedReq);
    }

  console.warn('No token found, proceeding with the original request'); // Debugging line to check if the token is missing
  

  return next(req);
};

