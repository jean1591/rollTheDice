import { ReactNode } from 'react'
import { classNames } from '@/utils/classNames'

export const DieOne = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Die size={size}>
      <Row>
        <EmptyPin size={size} />
        <EmptyPin size={size} />
        <EmptyPin size={size} />
      </Row>
      <Row>
        <EmptyPin size={size} />
        <FilledPin size={size} />
        <EmptyPin size={size} />
      </Row>
      <Row>
        <EmptyPin size={size} />
        <EmptyPin size={size} />
        <EmptyPin size={size} />
      </Row>
    </Die>
  )
}

export const DieTwo = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Die size={size}>
      <Row>
        <FilledPin size={size} />
        <EmptyPin size={size} />
        <EmptyPin size={size} />
      </Row>
      <Row>
        <EmptyPin size={size} />
        <EmptyPin size={size} />
        <EmptyPin size={size} />
      </Row>
      <Row>
        <EmptyPin size={size} />
        <EmptyPin size={size} />
        <FilledPin size={size} />
      </Row>
    </Die>
  )
}

export const DieThree = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Die size={size}>
      <Row>
        <FilledPin size={size} />
        <EmptyPin size={size} />
        <EmptyPin size={size} />
      </Row>
      <Row>
        <EmptyPin size={size} />
        <FilledPin size={size} />
        <EmptyPin size={size} />
      </Row>
      <Row>
        <EmptyPin size={size} />
        <EmptyPin size={size} />
        <FilledPin size={size} />
      </Row>
    </Die>
  )
}

export const DieFour = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Die size={size}>
      <Row>
        <FilledPin size={size} />
        <EmptyPin size={size} />
        <FilledPin size={size} />
      </Row>
      <Row>
        <EmptyPin size={size} />
        <EmptyPin size={size} />
        <EmptyPin size={size} />
      </Row>
      <Row>
        <FilledPin size={size} />
        <EmptyPin size={size} />
        <FilledPin size={size} />
      </Row>
    </Die>
  )
}

export const DieFive = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Die size={size}>
      <Row>
        <FilledPin size={size} />
        <EmptyPin size={size} />
        <FilledPin size={size} />
      </Row>
      <Row>
        <EmptyPin size={size} />
        <FilledPin size={size} />
        <EmptyPin size={size} />
      </Row>
      <Row>
        <FilledPin size={size} />
        <EmptyPin size={size} />
        <FilledPin size={size} />
      </Row>
    </Die>
  )
}

export const DieSix = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <Die size={size}>
      <Row>
        <FilledPin size={size} />
        <EmptyPin size={size} />
        <FilledPin size={size} />
      </Row>
      <Row>
        <FilledPin size={size} />
        <EmptyPin size={size} />
        <FilledPin size={size} />
      </Row>
      <Row>
        <FilledPin size={size} />
        <EmptyPin size={size} />
        <FilledPin size={size} />
      </Row>
    </Die>
  )
}

const EmptyPin = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <div className={classNames(pinSizeMapper[size], 'rounded-full bg-white')} />
  )
}

const FilledPin = ({ size }: { size: 'sm' | 'lg' }) => {
  return (
    <div
      className={classNames(pinSizeMapper[size], 'rounded-full bg-slate-800')}
    />
  )
}

const Row = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-between gap-x-1">{children}</div>
  )
}

const Die = ({
  children,
  size,
}: {
  children: ReactNode
  size: 'sm' | 'lg'
}) => {
  return (
    <div
      className={classNames(
        dieSizeMapper[size],
        'flex flex-col items-center justify-center rounded-lg border-[1px] border-slate-400 bg-white text-center text-sm shadow-md'
      )}
    >
      {children}
    </div>
  )
}

const pinSizeMapper: Record<'sm' | 'lg', string> = {
  sm: 'h-2 w-2',
  lg: 'h-4 w-4',
}

const dieSizeMapper: Record<'sm' | 'lg', string> = {
  sm: 'h-14 w-14 space-y-1 p-1',
  lg: 'h-24 w-24 space-y-2 p-2',
}
