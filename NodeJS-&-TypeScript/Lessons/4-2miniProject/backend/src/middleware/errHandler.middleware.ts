import type { NextFunction, Request, Response } from 'express'

const errHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error('Error: ', err.message)
  res.status(500).json({ error: err.message || 'Server error' })
}
export { errHandler }
