export class Tag{
    
    static readonly PYTHON = new Tag('Python', 'red');
    static readonly CPP = new Tag('C++', 'blue');
    static readonly C = new Tag('C', 'black');
    static readonly VERILOG = new Tag('Verilog', 'red');
    static readonly BASH = new Tag('Bash', 'orange');
    static readonly TCL = new Tag('Tcl', 'brown');
    static readonly CADENCE = new Tag('Cadence', 'purple');
    static readonly ASSEMBLY = new Tag('Assembly', 'darkred');
    static readonly VIVADO = new Tag('Vivado', 'lightblue');
    static readonly QUESTASIM = new Tag('Questasim', 'pink');
    static readonly GIT = new Tag('Git', 'black');
    static readonly LINUX = new Tag('Linux', 'yellow');
    static readonly FPGA = new Tag('FPGA', 'green');
    static readonly MICROCONTROLLER = new Tag('Microcontroller', 'purple');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString() {
        return this.key
    }
}