import { ReactNode } from 'react'

export const DieOne = () => {
  return (
    <Die>
      <Row>
        <EmptyPin />
        <EmptyPin />
        <EmptyPin />
      </Row>
      <Row>
        <EmptyPin />
        <FilledPin />
        <EmptyPin />
      </Row>
      <Row>
        <EmptyPin />
        <EmptyPin />
        <EmptyPin />
      </Row>
    </Die>
  )
}

export const DieTwo = () => {
  return (
    <Die>
      <Row>
        <FilledPin />
        <EmptyPin />
        <EmptyPin />
      </Row>
      <Row>
        <EmptyPin />
        <EmptyPin />
        <EmptyPin />
      </Row>
      <Row>
        <EmptyPin />
        <EmptyPin />
        <FilledPin />
      </Row>
    </Die>
  )
}

export const DieThree = () => {
  return (
    <Die>
      <Row>
        <FilledPin />
        <EmptyPin />
        <EmptyPin />
      </Row>
      <Row>
        <EmptyPin />
        <FilledPin />
        <EmptyPin />
      </Row>
      <Row>
        <EmptyPin />
        <EmptyPin />
        <FilledPin />
      </Row>
    </Die>
  )
}

export const DieFour = () => {
  return (
    <Die>
      <Row>
        <FilledPin />
        <EmptyPin />
        <FilledPin />
      </Row>
      <Row>
        <EmptyPin />
        <EmptyPin />
        <EmptyPin />
      </Row>
      <Row>
        <FilledPin />
        <EmptyPin />
        <FilledPin />
      </Row>
    </Die>
  )
}

export const DieFive = () => {
  return (
    <Die>
      <Row>
        <FilledPin />
        <EmptyPin />
        <FilledPin />
      </Row>
      <Row>
        <EmptyPin />
        <FilledPin />
        <EmptyPin />
      </Row>
      <Row>
        <FilledPin />
        <EmptyPin />
        <FilledPin />
      </Row>
    </Die>
  )
}

export const DieSix = () => {
  return (
    <Die>
      <Row>
        <FilledPin />
        <EmptyPin />
        <FilledPin />
      </Row>
      <Row>
        <FilledPin />
        <EmptyPin />
        <FilledPin />
      </Row>
      <Row>
        <FilledPin />
        <EmptyPin />
        <FilledPin />
      </Row>
    </Die>
  )
}

const EmptyPin = () => {
  return <div className="h-2 w-2 rounded-full bg-white" />
}

const FilledPin = () => {
  return <div className="h-2 w-2 rounded-full bg-slate-800" />
}

const Row = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-between gap-x-1">{children}</div>
  )
}

const Die = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-14 w-14 flex-col items-center justify-center space-y-1 rounded-lg border-[1px] border-slate-400 bg-white p-1 text-center text-sm shadow-md">
      {children}
    </div>
  )
}
